import React from "react";

import { Container, Title, Box } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";

import Image from "next/image";

export const OurBrands = () => {
  return (
    <>
      <Container disableGutters>
        <Title>
          OUR<Highlighted>BRANDS</Highlighted>
        </Title>
        <Box
          display="flex"
          alignItems="center"
          position="relative"
          whiteSpace="nowrap"
          padding="10px" // Optional padding for better appearance
          sx={{
            "::-webkit-scrollbar": { display: "none" },
            scrollBehavior: "smooth",
            overflowX: "auto",
          }}
        >
          <Image
            alt="our-brands"
            src={"/our-brands-mobile/brands-scrollable.svg"}
            width={1000}
            height={90}
          ></Image>
        </Box>
      </Container>
      <GreenDivider />
    </>
  );
};
