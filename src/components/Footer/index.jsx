import React from "react";
import { Container } from "../Container/Container";
import { FooterHeader } from "./Footer.styles";

export const Footer = () => {
  return (
    <div className="bg-[#3B3B3B]">
      <Container>
        <FooterHeader />

        <hr className="my-8" />
        <p className="font-spaceMono">Ⓒ Muhammad Nur Maulana 2023 with ❤️</p>
      </Container>
    </div>
  );
};
