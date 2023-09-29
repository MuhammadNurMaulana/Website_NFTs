import React from "react";
import { FaEye } from "react-icons/fa";

export const DiscoverHeader = () => {
  return (
    <div>
      <h2 className="font-workSans font-semibold text-2xl md:text-3xl">Discover More NFTs</h2>
      <div className="flex flex-col gap-4 md:flex-row mt-2 mb-8 md:justify-between md:items-center">
        <p className="font-workSans text-sm md:text-xl mt-2">Explore New Trending NFTs</p>
        <button className="flex gap-2 items-center border border-secondary py-2 px-6 rounded-lg max-w-max">
          <FaEye className="text-secondary" />
          <p>See All</p>
        </button>
      </div>
    </div>
  );
};
