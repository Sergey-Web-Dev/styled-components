import React from "react";
import { Link } from "react-router-dom";
import { ListNavElem } from "./ListNavElem.styled";

export const ListNav = ({ route, title }) => (
  <ListNavElem>
    <Link to={route}>{title}</Link>
  </ListNavElem>
);
