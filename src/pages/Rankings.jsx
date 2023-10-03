import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container/Container";
import creators from "../service/creator.json";

export const Rankings = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Rankings";
  }, []);
  return (
    <div className="bg-[#2B2B2B] text-white box-border">
      <Navbar />
      <Container>
        <h1 className="font-workSans font-semibold text-4xl">Top Creator Rankings</h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-1 my-8 items-center py-4 px-8 md:gap-8 lg:gap-0">
            <h1>No</h1>
            <h1>Name</h1>
            <h1 className="hidden md:block">Total Sales</h1>
            <h1 className="hidden lg:block">High Bid</h1>
            <h1 className="hidden md:block">Total Earn</h1>
          </div>
          {creators.map((creator, index) => (
            <div key={index} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-1 my-8 items-center py-4 px-8 hover:bg-slate-900 rounded-lg transition-all duration-300 hover:duration-300 font-spaceMono md:gap-8 lg:gap-0">
              <h1 className="font-spaceMono text-xl">{index + 1} </h1>
              <div className="flex items-center gap-3">
                <img src={creator.src} alt={creator.name} className="w-[40px] h-[40px] rounded-md" />
                <div>
                  <h1>{creator.name}</h1>
                  <h1 className="md:hidden text-sm font-spaceMono">{creator.total_sales}</h1>
                </div>
              </div>
              <h1 className="hidden md:block">{creator.total_sales}</h1>
              <h1 className="hidden lg:block">{creator.high_bid}</h1>
              <h1 className="hidden md:block">{creator.total_earn}</h1>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};
