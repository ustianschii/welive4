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
      {tvBrands.map((item, index) => (
        <>
          <Image
            alt="tv-brand"
            src={item.tvbrand}
            height={40}
            width={230}
            style={{ objectFit: "fill" }}
          />
          <CardBox key={index}>
            <CardTitle>{item.firsttitle}</CardTitle>
            <Description>{item.firstdescription}</Description>
            <CardTitle>{item.secondtitle}</CardTitle>
            <Description>{item.seconddescription}</Description>
            <CardTitle>{item.thirdtitle}</CardTitle>
            <Description>{item.thirddescription}</Description>
          </CardBox>
        </>
      ))}
    </Container>
  );
};

//unique key prop
