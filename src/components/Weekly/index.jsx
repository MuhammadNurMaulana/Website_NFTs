import React from "react";
import { Container } from "../Container/Container";
import { AiFillMail } from "react-icons/ai";

export const Weekly = () => {
  return (
    <Container>
      <div className="px-4 py-8 lg:p-12 flex flex-col md:flex-row gap-12 bg-[#3B3B3B] rounded-2xl items-center">
        <img src="../public/images/dark-fenrir.jpg" alt="fenrir" className="w-full md:w-[40%] lg:w-[60%] rounded-2xl" />
        <div className="w-full md:w-[60%] lg:w-[40%] flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-workSans font-semibold">Join Our Weekly Digest</h2>
            <p className="font-workSans">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
          </div>
          <div className="flex items-center">
            <input type="email" name="email" placeholder="Enter Your Email Here" className="p-2 rounded-2xl outline-none placeholder:text-slate-500 text-slate-800 w-[65%] bg-white" />
            <button className="flex gap-2 items-center bg-secondary py-2 px-4 rounded-2xl -ml-5">
              <AiFillMail />
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
