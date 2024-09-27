import React from "react";
import { FooterContainer } from "./styles";
import GetInTouch from "../get-in-touch";
import OurServices from "../our-services-footer";
import Social from "../social-footer";

export const Footer = () => {
  return (
    <FooterContainer>
      <GetInTouch />
      <OurServices />
      <Social />
    </FooterContainer>
  );
};
