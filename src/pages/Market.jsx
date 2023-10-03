import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import babys from "../service/baby.json";
import { Container } from "../components/Container/Container";
import { SwiperSlide } from "swiper/react";
import { SwiperJs } from "../swiper/Swiper";
import beasts from "../service/beast.json";
import gbeast from "../service/goldbeast.json";
import lbeast from "../service/lightbeas.json";
export const Market = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Market";
  });
  return (
    <div className="bg-[#2B2B2B] text-white box-border">
      <Navbar />
      <Container>
        <h1 className="font-workSans font-semibold text-2xl ">Baby Beast NFTs</h1>
        <SwiperJs>
          {babys.map((baby, index) => (
            <SwiperSlide key={index} className="bg-[#3B3B3B] rounded-xl overflow-hidden ml-8">
              <img src={baby.src} />
              <div className="py-3 px-5 gap-4 h-[180px] flex flex-col justify-between">
                <h1 className="font-workSans font-semibold text-lg">{baby.title}</h1>
                <div className="flex justify-between items-center">
                  <p>Price</p>
                  <p className="font-spaceMono">{baby.price}</p>
                </div>
                <button className="border border-secondary py-2 px-4 rounded-md hover:bg-secondary transition-all duration-200 hover:duration-300">Buy Now</button>
              </div>
            </SwiperSlide>
          ))}
        </SwiperJs>

        <h1 className="font-workSans font-semibold text-2xl ">Light Mythical NFTs</h1>
        <SwiperJs>
          {lbeast.map((beast, index) => (
            <SwiperSlide key={index} className="bg-[#3B3B3B] rounded-xl overflow-hidden ml-8">
              <img src={beast.src} />
              <div className="py-3 px-5 gap-4 h-[180px] flex flex-col justify-between">
                <h1 className="font-workSans font-semibold text-lg">{beast.title}</h1>
                <div className="flex justify-between items-center">
                  <p>Price</p>
                  <p className="font-spaceMono">{beast.price}</p>
                </div>
                <button className="border border-secondary py-2 px-4 rounded-md hover:bg-secondary transition-all duration-200 hover:duration-300">Buy Now</button>
              </div>
            </SwiperSlide>
          ))}
        </SwiperJs>
        <h1 className="font-workSans font-semibold text-2xl ">Golden King NFTs</h1>
        <SwiperJs>
          {gbeast.map((beast, index) => (
            <SwiperSlide key={index} className="bg-[#3B3B3B] rounded-xl overflow-hidden ml-8">
              <img src={beast.src} />
              <div className="py-3 px-5 gap-4 h-[180px] flex flex-col justify-between">
                <h1 className="font-workSans font-semibold text-lg">{beast.title}</h1>
                <div className="flex justify-between items-center">
                  <p>Price</p>
                  <p className="font-spaceMono">{beast.price}</p>
                </div>
                <button className="border border-secondary py-2 px-4 rounded-md hover:bg-secondary transition-all duration-200 hover:duration-300">Buy Now</button>
              </div>
            </SwiperSlide>
          ))}
        </SwiperJs>
        <h1 className="font-workSans font-semibold text-2xl ">Ancient Greed NFTs</h1>
        <SwiperJs>
          {beasts.map((beast, index) => (
            <SwiperSlide key={index} className="bg-[#3B3B3B] rounded-xl overflow-hidden ml-8">
              <img src={beast.src} />
              <div className="py-3 px-5 gap-4 h-[180px] flex flex-col justify-between">
                <h1 className="font-workSans font-semibold text-lg">{beast.title}</h1>
                <div className="flex justify-between items-center">
                  <p>Price</p>
                  <p className="font-spaceMono">{beast.price}</p>
                </div>
                <button className="border border-secondary py-2 px-4 rounded-md hover:bg-secondary transition-all duration-200 hover:duration-300">Buy Now</button>
              </div>
            </SwiperSlide>
          ))}
        </SwiperJs>
      </Container>
      <Footer />
    </div>
  );
};
