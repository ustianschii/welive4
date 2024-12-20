import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import {
  CardContent,
  Container,
  CardTitle,
  Description,
  Title,
  CardBox,
  CardsBox,
} from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { tvBrands } from "./data";
import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";

export const BlackCardsBox = () => {
  return (
    <Box sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
      <Container disableGutters>
        <Title>
          BEST-IN-CLASS
          <Highlighted>OUTDOOR TV BRANDS</Highlighted>
        </Title>
        <CardsBox>
          {tvBrands.map((item) => (
            <CardBox key={item.id}>
              <Image
                alt="tv-brand"
                src={item.tvbrand}
                height={70}
                width={230}
                style={{ marginBottom: "-15px", zIndex: "1" }}
              />
              <CardContent>
                {item.features.map((feature) => (
                  <React.Fragment key={feature.title}>
                    <CardTitle>{feature.title}</CardTitle>
                    <Description>{feature.description}</Description>
                  </React.Fragment>
                ))}
              </CardContent>
            </CardBox>
          ))}
        </CardsBox>
      </Container>
    </Box>
  );
};
