import React from "react";
import { Container } from "../Container/Container";
import { CategoriesStyles } from "./Categories.styles";

export const Categories = () => {
  return (
    <Container>
      <div>
        <h2 className="font-workSans font-semibold text-2xl md:text-3xl mb-8">Browse Categories</h2>
      </div>
      <CategoriesStyles />
    </Container>
  );
};
