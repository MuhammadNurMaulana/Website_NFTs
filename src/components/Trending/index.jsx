import React from "react";
import { Container } from "../Container/Container";
import trending from "../../service/trending.json";
import { TrendingStylesHeader } from "./Trending.styles";

export const Trending = () => {
  return (
    <Container>
      <TrendingStylesHeader />

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4 mt-8">
        {trending.map((item, index) => (
          <div key={index} className="grid">
            <img src={item.src} alt={item.name} className="rounded-xl" />

            <div className="grid grid-cols-3 grid-rows-1 gap-3 mt-4 ">
              {item.image.map((img, index) => (
                <img key={index} src={img.link} alt={img.link} className="grid rounded-lg" />
              ))}
              <div className="grid rounded-lg items-center justify-center bg-secondary font-spaceMono"> {item.value} </div>
            </div>
            <h1 className="mt-3 font-workSans text-lg md:text-xl font-semibold">{item.title}</h1>
            <div className="flex gap-2 items-center mt-2">
              <img src={item.src2} alt={item.src2} className="w-[30px] h-[30px] rounded-full " />
              <p className="font-spaceMono text-sm md:text-xl"> {item.name} </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
