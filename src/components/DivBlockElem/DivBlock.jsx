import { DivBlockElem } from "./DivBlockElem.styled";

export const DivBlock = ({ children, ...props }) => {
  return <DivBlockElem {...props}>{children}</DivBlockElem>;
};
