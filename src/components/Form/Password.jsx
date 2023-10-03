import React from "react";
import { Label } from "./Label";
import { HiKey } from "react-icons/hi2";
import { Input } from "./Input";

export const Password = ({ children }) => {
  return (
    <div className="py-2 px-3 rounded-lg bg-[#2B2B2B] border border-secondary flex justify-between text-white items-center mb-4">
      <div className="flex items-center gap-2">
        <Label htmlFor="password">
          <HiKey />
        </Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      {children}
    </div>
  );
};
