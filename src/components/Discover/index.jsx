import React from "react";
import { Container } from "../Container/Container";
import discovers from "../../service/discover.json";
import { FaEye } from "react-icons/fa";

export const Discover = () => {
  return (
    <Container>
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

      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {discovers.map((discover, index) => (
          <div key={index} className="rounded-xl overflow-hidden bg-[#3B3B3B]">
            <img src={discover.src} alt={discover.src} className="grid" />
            <div className="py-4 px-3 flex flex-col gap-2">
              <h3 className="text-2xl font-workSans font-semibold"> {discover.title} </h3>
              <div className="flex gap-2 items-center">
                <img src={discover.images} alt={discover.images} className="w-[30px] h-[30px] rounded-full" />
                <p className="font-spaceMono text-xl"> {discover.paragraph} </p>
              </div>
              <div className="flex justify-between">
                <p>Price</p>
                <p>Highest Bid</p>
              </div>
              <div className="flex justify-between font-spaceMono text-lg">
                <p> {discover.price} </p>
                <p> {discover.highest_bid} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
