import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="md:p-20 p-3 max-w-lg mx-auto bg-primary m-10  rounded-[10px]">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">SignUp</h1>
      <form className="flex flex-col gap-4 ">
      <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg "
          
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg "
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg "
        />
        <button className="bg-blue-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"></button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-white">Have an Account?</p>

        <Link href='/SignIn'><span className="text-blue-500">Sign in</span></Link>
      </div>
      <p className="text-red-600 mt-5"></p>
    </div>
  )
}

export default page