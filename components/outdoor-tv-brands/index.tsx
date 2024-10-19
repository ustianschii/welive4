import React from "react";

import { CardBox, Container, CardTitle, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";

import Image from "next/image";

import { tvBrands } from "./data";

export const BlackCardsBox = () => {
  return (
    <Container disableGutters>
      <Title>
        BEST-IN-CLASS <br />
        <Highlighted>
          OUTDOOR TV <br /> BRANDS
        </Highlighted>
      </Title>
      {tvBrands.map((item) => (
        <React.Fragment key={item.id}>
          <Image
            alt="tv-brand"
            src={item.tvbrand}
            height={35}
            width={260}
            style={{ objectFit: "fill" }}
          />
          <CardBox>
            {item.features.map((feature, index) => (
              <React.Fragment key={index}>
                <CardTitle>{feature.title}</CardTitle>
                <Description>{feature.description}</Description>
              </React.Fragment>
            ))}
          </CardBox>
        </React.Fragment>
      ))}
    </Container>
  );
};
