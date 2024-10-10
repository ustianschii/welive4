import React from "react";
import { Container, Title, Box } from "./styles";
import { Highlighted } from "../hero-title/styles";
import Image from "next/image";

export const OurBrands = () => {
  return (
    <Container disableGutters>
      <Title>
        OUR<Highlighted>BRANDS</Highlighted>
      </Title>
      <Box display="flex" alignItems={"center"}>
        <Image
          alt="our-brands"
          src={"/our-brands-mobile/our-brands-mobile.png"}
          width={450}
          height={90}
        ></Image>
      </Box>
    </Container>
  );
};
