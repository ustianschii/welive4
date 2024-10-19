import React from "react";

import { CardBox, Container, Title, Description, Subtitle } from "./styles";

import Image from "next/image";
import { GrayCardsBoxProps } from "./types";
import { Box } from "@mui/material";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({
  data,
  imgheight,
  imgwidth,
}) => {
  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index}>
          <Image
            alt="service"
            src={item.image}
            height={imgheight}
            width={imgwidth}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <Title>{item.title}</Title>
          <Box m="0 40px">
            <Description>{item.maindescription}</Description>
            <Subtitle>{item.firsttitle}</Subtitle>
            <Description>{item.firstdescription}</Description>
            <Subtitle>{item.secondtitle}</Subtitle>
            <Description>{item.seconddescription}</Description>
            <Subtitle>{item.thirdtitle}</Subtitle>
            <Description>{item.thirddescription}</Description>
          </Box>
        </CardBox>
      ))}
    </Container>
  );
};
