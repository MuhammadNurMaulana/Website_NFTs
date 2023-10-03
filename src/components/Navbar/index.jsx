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
      path: "/marketplace",
    },
    {
      label: "Rankings",
      path: "/rankings",
    },
    {
      label: "Connect a wallet",
      path: "/connect-wallet",
    },
  ];
  const toggleNav = () => {
    setShowNav(!showNav);
    console.log("showNav");
  };

  return (
    <NavbarStyles>
      <NavbarStyles.Header />

      <NavbarStyles.Menu showNav={showNav}>
        {navLink.map((link, index) => (
          <NavLink to={link.path} key={index} className={`px-[20px] py-3 font-semibold text-sm md:text-lg`}>
            {link.label}
          </NavLink>
        ))}

        <NavbarStyles.Button to={"/register"} classname={`flex items-center gap-3 px-[30px] py-3 bg-secondary rounded-[20px] font-semibold text-sm md:text-lg`}>
          <FaUserAstronaut className="text-lg md:text-xl" />
          <p>Sign Up</p>
        </NavbarStyles.Button>
      </NavbarStyles.Menu>

      <NavbarStyles.Button classname={`lg:hidden`} onclick={toggleNav}>
        <GiHamburger className="text-lg" />
      </NavbarStyles.Button>
    </NavbarStyles>
  );
};
