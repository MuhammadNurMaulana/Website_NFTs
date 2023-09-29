import React from "react";

export const NavbarStyles = ({ children }) => {
  return <div className="text-white flex justify-between items-center py-5 px-4 lg:px-[50px] fixed lg:relative z-50 -top-1 left-0 w-full bg-[#2B2B2B]">{children}</div>;
};

const Menu = (props) => {
  const { children, showNav } = props;
  return <div className={` ${showNav ? "flex flex-col absolute top-full bg-[#2B2B2B] text-center py-4 px-8 gap-2" : "hidden lg:flex gap-[10px] lg:relative font-workSans"}`}>{children}</div>;
};

NavbarStyles.Menu = Menu;
