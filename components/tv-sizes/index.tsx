import React from "react";

import { Container, Title, Description } from "./styles";
import { GreenDivider } from "../shared/green-divider";

import Image from "next/image";

export const TvSizes = () => {
  return (
    <Container disableGutters>
      <Title>Three Sizes, One Perfect Mount</Title>
      <Description>
        Discover the ideal solution for your entertainment needs with our
        versatile mounts – designed to perfectly fit three popular TV sizes.
      </Description>
      <GreenDivider />
      <Image
        alt="tv-sizes"
        src="/outdoor-tv/tv-types.png"
        height={350}
        width={290}
        style={{ margin: "40px 0" }}
      />
      <GreenDivider />
    </Container>
  );
};
