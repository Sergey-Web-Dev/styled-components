import React from "react";
import { Header } from "../components/Header/Header";
import { Lists } from "../components/ListsElem/Lists";

export const Context = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Lists />
    </>
  );
};
