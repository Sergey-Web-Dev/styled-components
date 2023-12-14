import React from "react";
import { routes } from "../../constants/mockData.ts";
import { ListNav } from "../List/ListNav.jsx";
import { ListsNavElem } from "./ListsNavElem.styled.js";

export const ListsNav = () => {
  return (
    <ListsNavElem>
      {routes.map(({ id, route, title }) => (
        <ListNav key={id} route={route} title={title} />
      ))}
    </ListsNavElem>
  );
};
