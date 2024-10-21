import React from "react";

import { Box } from "@mui/material";

import Image from "next/image";

import { avsolutions, features } from "./data";
import { Description, Title, Container } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const AvSolutions = () => {
  return (
    <Container>
      <Title>
        Residential & Commercial
        <Highlighted>AV</Highlighted>
        Solutions
      </Title>
      {features.map((item, index) => (
        <Description key={index}>{item}</Description>
      ))}
      {avsolutions.map((item, index) => (
        <Box key={index} display="flex" alignItems="flex-start">
          <Image
            alt="solution-logo"
            src={item.icon}
            height={30}
            width={30}
            style={{ marginRight: "15px" }}
          />
          <Description>{item.content}</Description>
        </Box>
      ))}
    </Container>
  );
};
