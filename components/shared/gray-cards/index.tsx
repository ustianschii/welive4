import React from "react";

import { CardBox, Container, Title, Description, Subtitle } from "./styles";

import Image from "next/image";
import { GrayCardsBoxProps } from "./types";
import { Box } from "@mui/material";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({
  data,
  imgheight,
  imgwidth,
  button,
}) => {
  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index}>
          {item.image && (
            <Image
              alt="service"
              src={item.image}
              height={imgheight}
              width={imgwidth}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "50px",
              }}
            />
          )}

          {item.title && <Title>{item.title}</Title>}
          <Box m="0 40px">
            <Description>{item.maindescription}</Description>
            <Subtitle>{item.firsttitle}</Subtitle>
            <Description>{item.firstdescription}</Description>
            <Subtitle>{item.secondtitle}</Subtitle>
            <Description>{item.seconddescription}</Description>
            <Subtitle>{item.thirdtitle}</Subtitle>
            <Description>{item.thirddescription}</Description>
          </Box>
          {button}
        </CardBox>
      ))}
    </Container>
  );
};
