import React from "react";
import { Container } from "../Container/Container";
import { AiFillMail } from "react-icons/ai";
import { WeeklyStyles } from "./Weekly.style";

export const Weekly = () => {
  return (
    <Container>
      <WeeklyStyles>
        <img src="/images/dark-fenrir.jpg" alt="fenrir" className="w-full md:w-[40%] lg:w-[60%] rounded-2xl" />

        <WeeklyStyles.Footer />
      </WeeklyStyles>
    </Container>
  );
};
