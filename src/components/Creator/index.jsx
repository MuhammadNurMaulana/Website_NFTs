import React from "react";
import { Container } from "../Container/Container";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import creators from "../../service/creator.json";

export const Creator = () => {
  return (
    <Container>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-4 mt-8">
        {creators.map((creator, index) => (
          <div key={index} className="py-4 px-2 bg-[#3B3B3B] relative flex flex-col items-center gap-4 rounded-2xl">
            <h3 className="absolute left-1 md:left-2 top-3 md:top-4 w-6 h-6 flex items-center justify-center rounded-full bg-[#2B2B2B] text-sm"> {creator.id} </h3>
            <img src={creator.src} alt={creator.src} className="w-[100px] h-[100px] rounded-full" />
            <h3 className="text-lg md:text-xl font-spaceMono "> {creator.name} </h3>
            <div className="flex items-center gap-4">
              <p className="text-xs md:text-sm">Total Sales : </p>
              <p className="text-xs md:text-sm font-spaceMono"> {creator.total_sales} </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
