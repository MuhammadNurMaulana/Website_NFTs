import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

export const FormHeader = ({ children, src }) => {
  return (
    <div className="bg-[#2B2B2B] text-white">
      <Link to={"/"} className="max-w-max block absolute top-4 left-8">
        <IoArrowBackCircle className="text-4xl " />
      </Link>
      <div className="md:px-20 py-20 grid sm:grid-cols-1 px-8 gap-16 md:gap-12 md:grid-cols-2 grid-rows-1">
        <div>
          <img src={src} alt="NFTs" className="grid rounded-2xl" />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};
