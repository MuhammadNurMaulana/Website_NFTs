import React from "react";
import { Label } from "./Label";
import { TbCircleKey } from "react-icons/tb";
import { Input } from "./Input";

export const Password = ({ children, placeholder, htmlFor, id }) => {
  return (
    <div className="py-2 px-3 rounded-lg bg-[#2B2B2B] border border-secondary flex justify-between text-white items-center mb-4">
      <div className="flex items-center gap-2">
        <Label htmlFor={htmlFor}>
          <TbCircleKey />
        </Label>
        <Input type="password" id={id} placeholder={placeholder} name={"password"} />
      </div>
      {children}
    </div>
  );
};
