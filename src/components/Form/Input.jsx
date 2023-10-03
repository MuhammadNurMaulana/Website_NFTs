import React from "react";

export const Input = ({ type, placeholder, id }) => {
  return <input type={type} id={id} placeholder={placeholder} className="placeholder:text-white bg-[#2B2B2B] outline-none" />;
};
