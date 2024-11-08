import React from "react";

import {
  CardContent,
  Container,
  CardTitle,
  Description,
  Title,
  CardBox,
} from "./styles";
import { Highlighted } from "../hero-title/styles";

import Image from "next/image";

import { tvBrands } from "./data";

export const BlackCardsBox = () => {
  return (
    <Container disableGutters>
      <Title>
        BEST-IN-CLASS
        <Highlighted>OUTDOOR TV BRANDS</Highlighted>
      </Title>
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
            {item.features.map((feature, index) => (
              <React.Fragment key={index}>
                <CardTitle>{feature.title}</CardTitle>
                <Description>{feature.description}</Description>
              </React.Fragment>
            ))}
          </CardContent>
        </CardBox>
      ))}
    </Container>
  );
};
