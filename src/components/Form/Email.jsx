import React from "react";
import { MdMail } from "react-icons/md";
import { Label } from "./Label";
import { Input } from "./Input";

export const Email = () => {
  return (
    <div className="py-2 px-3 rounded-lg bg-[#2B2B2B] border border-secondary flex gap-2 text-white items-center mb-4">
      <Label htmlFor={"email"}>
        <MdMail />
      </Label>
      <Input type={"email"} id={"email"} placeholder={"Enter your Email"} />
    </div>
  );
};
