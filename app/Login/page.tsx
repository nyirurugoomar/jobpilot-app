'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful!");
      // Assuming the response contains a token or user data, you might want to save it in localStorage or context
      //localStorage.setItem('token', response.data.token);
      router.push("/profile");
    } catch (error:any) {
      console.error("Login failed", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        toast.error(`Error: ${error.response.data.message}`);
      } else {
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
    <div className="md:p-20 p-3 max-w-lg mx-auto bg-primary m-10 rounded-[10px]">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">
        {loading ? "Processing..." : "Login"}
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          type="submit"
          disabled={buttonDisabled}
          onClick={onLogin}
          className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {buttonDisabled ? "Wait" : "Login"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-white">Don't have an account?</p>
        <Link href='/SignUp'>
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5"></p>
    </div>
  );
}

export default Login;
