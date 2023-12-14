import React from "react";
import { Context } from "../context/Context";
import { routes } from "../constants/mockData.ts";
import Title from "../components/Title/Title";
import Description from "../components/Description/Description";

export const Links = () => {
  return (
    <>
      <Context>
        {routes
          .filter((el) => el.title === "Links")
          .map(({ title, description }) => {
            return (
              <>
                <Title center="center">{title}</Title>
                <Description center="center">{description}</Description>
              </>
            );
          })}
      </Context>
    </>
  );
};
