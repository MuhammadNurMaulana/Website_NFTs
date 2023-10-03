import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import babys from "../service/baby.json";
import { Container } from "../components/Container/Container";
import { SwiperSlide } from "swiper/react";
import { SwiperJs } from "../swiper/Swiper";
export const Market = () => {
  return (
    <div className="bg-[#2B2B2B] text-white box-border">
      <Navbar />
      <Container>
        <h1>Baby Beast NFTs</h1>
        <SwiperJs>
          {babys.map((baby, index) => (
            <SwiperSlide key={index} className="bg-[#3B3B3B] rounded-xl overflow-hidden ml-8">
              <img src={baby.src} />
              <div className="py-3 px-5 flex flex-col gap-4">
                <h1 className="font-workSans font-semibold text-xl">{baby.title}</h1>
                <div className="flex justify-between items-center">
                  <p>Price</p>
                  <p className="font-spaceMono">{baby.price}</p>
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
