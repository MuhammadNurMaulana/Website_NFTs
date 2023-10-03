import React from "react";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { AiOutlineCamera } from "react-icons/ai";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { BiPaint, BiVideo } from "react-icons/bi";
import { GiPencilBrush } from "react-icons/gi";
import { TiWorld } from "react-icons/ti";
import { MdSportsVolleyball } from "react-icons/md";
export const CategoriesStyles = () => {
  const categories = [
    {
      src: "/images/art.jpg",
      name: "Art",
      icons: <BiPaint />,
    },
    {
      src: "/images/city.jpg",
      name: "Collectibles",
      icons: <LiaSwatchbookSolid />,
    },
    {
      src: "/images/space.jpg",
      name: "Music",
      icons: <IoMusicalNotesOutline />,
    },
    {
      src: "/images/ship.jpg",
      name: "Potography",
      icons: <AiOutlineCamera />,
    },
    {
      src: "/images/island.jpg",
      name: "Video",
      icons: <BiVideo />,
    },
    {
      src: "/images/mountain.jpg",
      name: "Utility",
      icons: <GiPencilBrush />,
    },
    {
      src: "/images/jupiter.jpg",
      name: "Sport",
      icons: <MdSportsVolleyball />,
    },
    {
      src: "/images/village-cave.jpg",
      name: "Victual Words",
      icons: <TiWorld />,
    },
  ];
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((categori, index) => (
          <div key={index} className="relative bg-[#3B3B3B] rounded-2xl overflow-hidden">
            <div className="relative group">
              <img src={categori.src} alt={categori.name} className="grid" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur-sm flex justify-center items-center text-6xl transition-all duration-700 group-hover:opacity-0 group-hover:duration-700">{categori.icons}</div>
            </div>
            <h3 className="my-2 mx-4 font-workSans font-semibold"> {categori.name} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
