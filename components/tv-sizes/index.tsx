"use client";

import React from "react";

import { Container, Title, Description, Wrapper } from "./styles";
import { GreenDivider } from "../shared/green-divider";

import Image from "next/image";

import { useTheme, useMediaQuery } from "@mui/material";

export const TvSizes = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const image = isPhone
    ? "/outdoor-tv/tv-types.png"
    : isTablet
    ? "/outdoor-tv/tablet/tv-types-tablet.svg"
    : "/outdoor-tv/tablet/tv-types-tablet.svg";

  const width = isPhone ? 290 : isTablet ? 600 : 600;

  const height = isPhone ? 350 : isTablet ? 300 : 300;

  return (
    <Wrapper>
      <Container disableGutters>
        <Title>Three Sizes, One Perfect Mount</Title>
        <Description>
          Discover the ideal solution for your entertainment needs with our
          versatile mounts – designed to perfectly fit three popular TV sizes.
        </Description>
        <GreenDivider />
        <Image
          alt="tv-sizes"
          src={image}
          height={height}
          width={width}
          style={{ margin: "40px 0" }}
        />
        <GreenDivider />
      </Container>
    </Wrapper>
  );
};
