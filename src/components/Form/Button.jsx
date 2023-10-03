import React from "react";

export const ButtonForm = ({ children }) => {
  return <div className="cursor-pointer border border-secondary rounded-lg py-3 text-center text-xl font-spaceMono hover:bg-secondary transition-all duration-300 hover:duration-300 mb-3">{children}</div>;
};
