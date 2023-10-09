import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterHeader = () => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-12 font-workSans text-sm md:text-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[10px] text-sm md:text-xl">
          <img src="/logo.png" alt="My Logo" className="w-[35px] h-[35px] rounded-full" onContextMenu={(e) => e.preventDefault()} />
          <Link to={"/"} className="font-spaceMono text-2xl md:text-3xl">
            RireNFTs Marketplace
          </Link>
        </div>
        <p>NFT marketplace UI created with Anima for Figma.</p>
        <p>Join our community</p>
        <div className="flex gap-4 text-3xl">
          <FaDiscord />
          <FaYoutube />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Explore</h1>
        <Link to={"/marketplace"}>Marketplace</Link>
        <Link to={"/rankings"}>Rankings</Link>
        <Link>Connect a wallet</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Join Our Weekly Digest</h2>
        <p>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>

        <div className="flex items-center">
          <input type="email" name="email" placeholder="Enter Your Email Here" className="p-2 rounded-2xl outline-none placeholder:text-slate-500 text-slate-800" />
          <button className="flex gap-2 items-center bg-secondary py-2 px-4 rounded-2xl -ml-5">
            <p>Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  );
};
