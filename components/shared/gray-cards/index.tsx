import React from "react";

import { CardBox, Container, Title, Description } from "./styles";

import Image from "next/image";
import { GrayCardsBoxProps } from "./types";

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
          <Description>{item.firstdescription}</Description>
          <Description>{item.seconddescription}</Description>
        </CardBox>
      ))}
    </Container>
  );
};
