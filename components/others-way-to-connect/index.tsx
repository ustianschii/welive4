import React from "react";

import { BannerContainer, Description, Title, Wrapper } from "./styles";

import { Box } from "@mui/material";

import Image from "next/image";

export const OtherWayToConnect = () => {
  return (
    <Wrapper>
      <BannerContainer>
        <Title>Other ways to connect</Title>
        <Box>
          <Box display="flex" m="20px 0">
            <Image
              alt="facebook-icon"
              src="consultation/facebook.svg"
              height={70}
              width={68}
            />
            <Description>
              Join our community on Facebook for exclusive updates, special
              offers, and insider insights into our cutting-edge home and
              building automation solutions.
            </Description>
          </Box>
          <Box display="flex">
            <Image
              alt="facebook-icon"
              src="consultation/instagram.svg"
              height={70}
              width={68}
            />
            <Description>
              Discover inspiration, tips, and behind-the-scenes moments that
              showcase the power of automation by following us on Instagram!
            </Description>
          </Box>
        </Box>
      </BannerContainer>
    </Wrapper>
  );
};
