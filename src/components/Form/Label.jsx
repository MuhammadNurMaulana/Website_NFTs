import React from "react";

export const Label = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
