import React from "react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <form action="" className="flex flex-col max-w-max bg-slate-800 text-white p-12 rounded-xl gap-8">
        <h1 className="text-center text-3xl">Sign In</h1>
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input type="text" placeholder="Input Your Username" />
          <label>Password</label>
          <input type="password" placeholder="Input Your Password" />
          <button className="bg-red-500 mt-4">Sign In</button>
        </div>
      </form>
    </div>
  );
};
