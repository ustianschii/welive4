import React from "react";
import { Box, FooterContainer, Wrapper } from "./styles";
import GetInTouch from "../get-in-touch";
import OurServices from "../our-services-footer";
import Social from "../social-footer";
import { ContactUs } from "../contact-us-footer";
import { Map } from "../google-map/index";

export const Footer = () => {
  return (
    <Wrapper>
      <Map />
      <FooterContainer disableGutters>
        <GetInTouch />
        <Box>
          <OurServices />
          <Social />
          <ContactUs />
        </Box>
      </FooterContainer>
    </Wrapper>
  );
};
