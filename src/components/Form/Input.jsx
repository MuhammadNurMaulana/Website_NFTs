import React from "react";

export const Input = ({ type, placeholder, id, name }) => {
  return <input type={type} id={id} name={name} placeholder={placeholder} className="placeholder:text-white bg-[#2B2B2B] outline-none" />;
};
