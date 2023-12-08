import React from "react";
import { DescriptionElem } from "./DescriptionElem.styled";

const Description = ({ children, ...props }) => {
  return <DescriptionElem {...props}>{children}</DescriptionElem>;
};

export default Description;
