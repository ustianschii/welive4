"use client";

import React from "react";

import { Container, Title, BrandsBox, BrandsImages } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";
import { useMediaQuery, useTheme } from "@mui/material";

export const OurBrands = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
      <Container disableGutters id="our-brands">
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
              // width={1000}
              // height={60}
            />
          ))}
        </BrandsBox>
      </Container>
      <GreenDivider />
    </>
  );
};
