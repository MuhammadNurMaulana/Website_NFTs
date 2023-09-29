import React from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";

export const CreatorStylesHeader = () => {
  return (
    <div>
      <h2 className="font-workSans font-semibold text-2xl md:text-3xl">Top Creators</h2>
      <div className="flex justify-between md:items-center gap-6 flex-col md:flex-row">
        <p className="font-workSans text-sm md:text-xl mt-2">Checkout Top Rated Creators On The NFT Marketplace</p>
        <button className="flex gap-2 items-center border border-secondary py-2 px-6 rounded-lg max-w-max">
          <HiMiniRocketLaunch className="text-secondary" />
          <p>View Rankings</p>
        </button>
      </div>
    </div>
  );
};
