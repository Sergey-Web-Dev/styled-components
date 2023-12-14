import React from "react";
import { SpanElem } from "./SpanElem.styled";

const Span = ({ children, ...props }) => {
  return <SpanElem {...props}>{children}</SpanElem>;
};

export default Span;
