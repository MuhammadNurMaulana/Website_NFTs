import React from "react";
import { Container } from "../Container/Container";
import discovers from "../../service/discover.json";
import { DiscoverHeader } from "./Discover.styles";

export const Discover = () => {
  return (
    <Container>
      <DiscoverHeader />

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
