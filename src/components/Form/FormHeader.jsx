import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

export const FormHeader = ({ children }) => {
  return (
    <div className="bg-[#2B2B2B] text-white">
      <Link to={"/"} className="max-w-max block absolute top-4 left-8">
        <IoArrowBackCircle className="text-4xl " />
      </Link>
      {children}
      <Footer />
    </div>
  );
};
