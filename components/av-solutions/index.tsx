"use client";

import React from "react";

import { Box, useTheme, useMediaQuery } from "@mui/material";

import Image from "next/image";

import { avsolutions, features } from "./data";
import { Description, Title, Container, Wrapper } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const AvSolutions = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isPhone ? 30 : isTablet ? 45 : 40;
  const height = isPhone ? 30 : isTablet ? 45 : 40;

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Title>
          Residential & Commercial
          <Highlighted>AV</Highlighted>
          Solutions
        </Title>
        {features.map((item, index) => (
          <Description key={index}>{item}</Description>
        ))}
        {avsolutions.map((item, index) => (
          <Box key={index} display="flex" alignItems="flex-start" mt="5px">
            <Image
              alt="solution-logo"
              src={item.icon}
              height={height}
              width={width}
              style={{ margin: "15px 15px 0 0" }}
            />
            <Description>{item.content}</Description>
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
};
