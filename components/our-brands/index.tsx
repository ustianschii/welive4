"use client";

import React from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import { Container, Title, BrandsBox, BrandsImages } from "./styles";

import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";

export const OurBrands = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getWidth = () => (isMobile ? 150 : isTablet ? 200 : 250);
  const getHeight = () => (isMobile ? 60 : isTablet ? 200 : 300);

  const partners = [
    "/our-brands-mobile/aegis.png",
    "/our-brands-mobile/lorbeam.png",
    "/our-brands-mobile/mount-it.png",
    "/our-brands-mobile/next-level.png",
    "/our-brands-mobile/unify.png",
  ];

  return (
    <>
      <Container id="our-brands">
        <Title>
          OUR<Highlighted>BRANDS</Highlighted>
        </Title>
        <BrandsBox>
          {partners.map((partner, index) => (
            <BrandsImages
              key={index}
              alt="our-brands"
              src={partner}
              width={getWidth()}
              height={getHeight()}
            />
          ))}
        </BrandsBox>
      </Container>
      <GreenDivider />
    </>
  );
};
