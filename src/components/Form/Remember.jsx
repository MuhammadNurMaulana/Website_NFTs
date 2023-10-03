import React from "react";
import { Link } from "react-router-dom";

export const Remember = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p className="md:text-sm lg:text-base">Remember Password</p>
      </div>
      <Link className="hover:text-secondary transition-all duration-200 hover:duration-300 md:text-sm lg:text-base">Forgot Password</Link>
    </div>
  );
};
