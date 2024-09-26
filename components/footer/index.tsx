import React from "react";
import { FooterContainer } from "./styles";
import GetInTouch from "../get-in-touch";
import OurServices from "../our-services";
import Social from "../social";

export const Footer = () => {
  return (
    <FooterContainer>
      <GetInTouch />
      <OurServices />
      <Social />
    </FooterContainer>
  );
};
