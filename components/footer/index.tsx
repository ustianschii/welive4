import React from "react";
import { Box, FooterContainer, Wrapper } from "./styles";
import GetInTouch from "../get-in-touch";
import OurServices from "../our-services-footer";
import Social from "../social-footer";
import { ContactUs } from "../contact-us-footer";
import { Map } from "../google-map/index";
import { Container, Divider, Typography } from "@mui/material";

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
      <Divider variant="middle" sx={{ mb: "10px", backgroundColor: "grey" }} />
      <Container
        disableGutters
        sx={{ display: "flex", color: "white", p: "40px 0" }}
      >
        <Box maxWidth={"50%"}>
          <Typography>Copyright 2024. All rights reserved.</Typography>
        </Box>
        <Box
          maxWidth={"50%"}
          display={"flex"}
          justifyContent={"end"}
          gap={"20px"}
        >
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Use</Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};
