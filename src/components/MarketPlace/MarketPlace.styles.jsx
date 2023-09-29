import React from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";

export const MarketPlaceStyles = ({ children }) => {
  return <div className="flex flex-col gap-8 md:flex-row"> {children} </div>;
};

const Header = (props) => {
  const { nameTitle, children, nameParagraph } = props;

  const box = [
    {
      title: "240k+",
      name: "Total Sale",
    },
    {
      title: "100k+",
      name: "Auctions",
    },
    {
      title: "240k+",
      name: "Artist",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px] w-full md:w-1/2" data-aos="fade-right">
      <div>
        <h2 className="text-3xl lg:text-5xl font-semibold mb-2"> {nameTitle} </h2>
        <p className="text-sm md:text-lg font-normal"> {children} </p>
      </div>

      <button className="max-w-max flex items-center gap-2 py-2 px-8 bg-secondary rounded-2xl justify-center text-sm md:text-lg">
        <HiMiniRocketLaunch />
        <p> {nameParagraph} </p>
      </button>

      <div className="flex gap-16">
        {box.map((item, index) => (
          <div key={index}>
            <h4 className="font-spaceMono text-lg"> {item.title} </h4>
            <p className="font-workSans font-normal text-sm"> {item.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ nameTitle, nameParagraph }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-end" data-aos="fade-left">
      <div className="rounded-2xl md:rounded-3xl overflow-hidden">
        <img src="../public/images/neon.jpg" alt="neon-retro" className="w-full" />
        <div className="py-4 px-6 bg-[#3B3B3B]">
          <h4 className="font-workSans font-semibold text-lg"> {nameTitle} </h4>
          <div className="flex gap-2 items-center mt-2">
            <img src="../public/images/dog.jpg" alt="dog" className="w-[30px] h-[30px] rounded-full" />
            <p className="font-spaceMono text-sm md:text-lg"> {nameParagraph} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

MarketPlaceStyles.Header = Header;
MarketPlaceStyles.Footer = Footer;
