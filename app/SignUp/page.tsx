'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup successful!");
      router.push("/Login");
    } catch (error:any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='w-screen h-screen bg-bg-login bg-cover flex justify-center items-center'>
      <div className="md:p-20 p-3 max-w-lg w-full bg-white mx-auto  m-10 rounded-[10px]">
      <h1 className="text-3xl text-center font-semibold my-7 text-primary">
        {loading ? "Processing..." : "Signup"}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={onSignup}>
        
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="bg-[#0C0C0D0A] p-3 rounded-lg"
        />
        
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
        <button
          type="submit"
          disabled={buttonDisabled}
          className="bg-primary text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {buttonDisabled ? "Wait" : "SignUp"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-black">Have an Account?</p>
        <Link href='/Login'>
          <span className="text-blue-500 underline">Sign in</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5"></p>
    </div>
    </div>
  );
}

export default SignupPage;
