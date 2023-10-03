import React, { useEffect } from "react";
import { MarketPlace } from "../components/MarketPlace";
import { Navbar } from "../components/Navbar";
import { Trending } from "../components/Trending";
import { Creator } from "../components/Creator";
import { Categories } from "../components/Category";
import { Discover } from "../components/Discover";
import { Magic } from "../components/Magic";
import { Works } from "../components/Works";
import { Weekly } from "../components/Weekly";
import { Footer } from "../components/Footer";

export const Home = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Home";
  });
  return (
    <div className="bg-[#2B2B2B] text-white box-border">
      <Navbar />
      <MarketPlace />
      <Trending />
      <Creator />
      <Categories />
      <Discover />
      <Magic />
      <Works />
      <Weekly />
      <Footer />
    </div>
  );
};
