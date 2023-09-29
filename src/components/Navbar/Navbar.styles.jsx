import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

export const NavbarStyles = ({ children }) => {
  return <div className="text-white flex justify-between items-center py-5 px-4 lg:px-[50px] fixed lg:relative z-50 -top-1 left-0 w-full bg-[#2B2B2B]">{children}</div>;
};

const Header = () => {
  return (
    <div className="flex items-center gap-[10px] text-sm md:text-xl">
      <img src="../public/images/logo.jpg" alt="My Logo" className="w-[35px] h-[35px] rounded-full" />
      <h1 className="font-spaceMono text-lg md:text-xl">RireNFTs MarketPlace</h1>
    </div>
  );
};

const Menu = (props) => {
  const { children, showNav } = props;
  return <div className={` ${showNav ? "flex flex-col absolute top-full bg-[#2B2B2B] text-center py-4 px-8 gap-2" : "hidden lg:flex gap-[10px] lg:relative font-workSans"}`}>{children}</div>;
};

const Button = ({ children, classname, onclick }) => {
  return (
    <button className={classname} onClick={onclick}>
      {/* <FaUserAstronaut className="text-lg md:text-xl" />
      <p>Sign Up</p> */}
      {children}
    </button>
  );
};

NavbarStyles.Menu = Menu;
NavbarStyles.Header = Header;
NavbarStyles.Button = Button;
