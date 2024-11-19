import React from "react";

import { Container, Title, Review } from "./styles";
import { CardTypes } from "./types";

import { Box } from "@mui/material";

import Image from "next/image";

export const Card: React.FC<CardTypes> = ({ name, review }) => {
  const stars = new Array(5).fill(0);

  return (
    <Container>
      <Title>{name}</Title>
      <Review>{review}</Review>
      <Box display="flex" position="absolute" bottom="15px" left="5px">
        {stars.map((_, index) => (
          <Image
            key={index}
            alt="review-provider"
            src="/reviews-mobile/star_contained.svg"
            width={28}
            height={28}
          />
        ))}
      </Box>
    </Container>
  );
};
