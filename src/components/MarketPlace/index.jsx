import React from "react";
import { MarketPlaceStyles } from "./MarketPlace.styles";
import { Container } from "../Container/Container";

export const MarketPlace = () => {
  return (
    <Container>
      <MarketPlaceStyles>
        <MarketPlaceStyles.Header nameTitle="Discover Digital Art & Collect NFTs" nameParagraph="Get Started">
          NFT Marketplace UI Created With Anima For Figma. Collect, Buy and Sell Art From More Than 20k NFT Artist
        </MarketPlaceStyles.Header>

        <MarketPlaceStyles.Footer nameTitle="Neon Retro Dude" nameParagraph="Maulana_Dst" />
      </MarketPlaceStyles>
    </Container>
  );
};
