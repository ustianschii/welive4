"use client";

import React from "react";

import { Container, Title, Box } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";

import Image from "next/image";

export const OurBrands = () => {
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
        <Box
          display="flex"
          alignItems="center"
          position="relative"
          whiteSpace="nowrap"
          padding="10px"
          sx={{
            "::-webkit-scrollbar": { display: "none" },
            scrollBehavior: "smooth",
            overflowX: "auto",
          }}
        >
          {partners.map((partner, index) => (
            <Image
              key={index}
              alt="our-brands"
              src={partner}
              width={1000}
              height={60}
              style={{ margin: "0 30px", width: "auto", height: "auto" }}
            />
          ))}
        </Box>
      </Container>
      <GreenDivider />
    </>
  );
};
