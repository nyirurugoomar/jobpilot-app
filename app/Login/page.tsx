'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaSpinner } from "react-icons/fa";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(""); // Clear previous error messages
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful!");
      router.push("/");
    } catch (error: any) {
      console.error("Login failed", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setErrorMessage(error.response.data.message || "Login failed. Please try again.");
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='w-screen h-screen bg-bg-login bg-cover flex justify-center items-center'>
      {/* card */}
      <div className="md:p-20 p-3 max-w-lg w-full bg-white rounded-[10px] mx-3">
        <h1 className="text-3xl text-center font-semibold my-7 text-primary">
          {loading 
          ?
           <div className="flex justify-center items-center">
           <FaSpinner className="animate-spin text-primary" size={30} />
         </div>
          :
            "Login"}
        </h1>
        
        <form className="flex flex-col gap-4" onSubmit={onLogin}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="bg-[#0C0C0D0A] p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="bg-[#0C0C0D0A] p-3 rounded-lg"
          />
          {errorMessage && (
          <p className="text-[#FA0000] text-center mb-5">{errorMessage}</p>
        )}
          <button
            type="submit"
            disabled={buttonDisabled}
            className="bg-primary text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {buttonDisabled ? "Wait" : "Login"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p className="text-black">Don't have an account?</p>
          <Link href='/SignUp'>
            <span className="text-blue-500 underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
