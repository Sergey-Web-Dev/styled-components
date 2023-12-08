import React from "react";
import { TitleElem } from "./TitleElem.styled";

const Title = ({ children, ...props }) => {
  return <TitleElem {...props}>{children}</TitleElem>;
};

export default Title;
