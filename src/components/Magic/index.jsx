import React from "react";
import { FaEye } from "react-icons/fa";

export const Magic = () => {
  const times = [
    {
      label: "Hourse",
      time: 59,
    },
    {
      label: "Minutes",
      time: 59,
    },
    {
      label: "Second",
      time: 59,
    },
  ];
  return (
    <div className="bg-[url(/images/magic.jpg)] bg-cover bg-center h-[500px] flex flex-col lg:flex-row py-12 px-4 md:py-12 md:px-16 justify-between items-end md:items-start lg:items-end" data-aos="fade-up-left">
      <div className="flex flex-col gap-4">
        <button className="flex gap-2 items-center py-2 px-4 bg-[#2B2B2B] rounded-xl max-w-max">
          <img src="/images/sugar.jpg" alt="NFTs Cs" className="w-[30px] h-[30px] rounded-full" />
          <p className="font-spaceMono">Child`Ssc</p>
        </button>

        <h2 className="text-5xl font-workSans font-semibold">Magic Mashrooms</h2>

        <button className="flex items-center py-2 px-4 bg-white rounded-xl max-w-max gap-2">
          <FaEye className="text-secondary" />
          <p className="text-slate-900 font-workSans">See NFT</p>
        </button>
      </div>

      <div className="bg-slate-800/60 max-w-max p-3 rounded-xl text-white">
        <p>Auctions ends in:</p>

        <div className="flex gap-8">
          {times.map((time, index) => (
            <div key={index} className="flex">
              <div className="text-center">
                <h1 className="text-xl font-workSans font-semibold"> {time.time} </h1>
                <p> {time.label} </p>
              </div>
              {index < 2 ? <h1> : </h1> : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
