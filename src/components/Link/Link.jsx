import React from "react";
import { LinkElem } from "./LinkElem.styled.js";

const Link = ({ children, ...props }) => {
  return <LinkElem {...props}>{children}</LinkElem>;
};

export default Link;
