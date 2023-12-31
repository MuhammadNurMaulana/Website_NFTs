import React from "react";
import { Label } from "./Label";
import { FaUser } from "react-icons/fa";
import { Input } from "./Input";

export const Username = ({ placeholder, htmlFor, id }) => {
  return (
    <div className="py-2 px-3 rounded-lg bg-[#2B2B2B] border border-secondary flex gap-2 text-white items-center mb-4">
      <Label htmlFor={htmlFor}>
        <FaUser />
      </Label>
      <Input type="text" id={id} placeholder={placeholder} name={"username"} />
    </div>
  );
};
