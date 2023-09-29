import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { NavbarStyles } from "./Navbar.styles";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navLink = [
    {
      label: "Marketplace",
    },
    {
      label: "Rankings",
    },
    {
      label: "Connect a wallet",
    },
  ];
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <NavbarStyles>
      <div className="flex items-center gap-[10px] text-sm md:text-xl">
        <img src="../public/images/logo.jpg" alt="My Logo" className="w-[35px] h-[35px] rounded-full" />
        <h1 className="font-spaceMono text-lg md:text-xl">RireNFTs MarketPlace</h1>
      </div>

      <NavbarStyles.Menu showNav={showNav}>
        {navLink.map((link, index) => (
          <NavLink key={index} className={`px-[20px] py-3 font-semibold text-sm md:text-lg`}>
            {link.label}
          </NavLink>
        ))}
        <button className="flex items-center gap-3 px-[30px] py-3 bg-secondary rounded-[20px] font-semibold text-sm md:text-lg">
          <FaUserAstronaut className="text-lg md:text-xl" />
          <p>Sign Up</p>
        </button>
      </NavbarStyles.Menu>

      <button className="lg:hidden" onClick={toggleNav}>
        <GiHamburger className="text-lg" />
      </button>
    </NavbarStyles>
  );
};
