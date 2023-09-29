import React from "react";
import { Container } from "../Container/Container";
import works from "../../service/works.json";
import { WorksHeader } from "./Works.styles";

export const Works = () => {
  return (
    <Container>
      <WorksHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 mt-8">
        {works.map((work, index) => (
          <div key={index} className="bg-[#3B3B3B] p-4 flex flex-col items-center gap-2 rounded-2xl">
            <img src={work.src} alt={work.title} className="w-[208px]" />
            <h2> {work.title} </h2>
            <p className="text-center"> {work.paragraph} </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
