import React from "react";
import { Container, Title, Box } from "./styles";
import { Highlighted } from "../hero-title/styles";
import Image from "next/image";
import { GreenDivider } from "../shared/green-divider";

export const OurBrands = () => {
  return (
    <>
      <Container disableGutters>
        <Title>
          OUR<Highlighted>BRANDS</Highlighted>
        </Title>
        <Box display="flex" alignItems="center" position="relative">
          <Image
            alt="our-brands"
            src={"/our-brands-mobile/our-brands-mobile.png"}
            width={450}
            height={90}
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </Box>
      </Container>
      <GreenDivider />
    </>
  );
};
