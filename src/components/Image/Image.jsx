import React from "react";
import { ImageElem } from "./ImageElem.styled.js";

const Image = ({ children, ...props }) => {
  return <ImageElem {...props}>{children}</ImageElem>;
};

export default Image;
