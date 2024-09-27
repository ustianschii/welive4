import React from "react";
import { FooterContainer, Wrapper } from "./styles";
import GetInTouch from "../get-in-touch";
import OurServices from "../our-services-footer";
import Social from "../social-footer";

export const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer disableGutters>
        <GetInTouch />
        <OurServices />
        <Social />
      </FooterContainer>
    </Wrapper>
  );
};
