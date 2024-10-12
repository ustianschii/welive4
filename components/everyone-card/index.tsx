import React from "react";

import { Title, Container } from "./styles";
import { CardTypes } from "./types";

export const Card: React.FC<CardTypes> = ({ background, title }) => {
  return (
    <Container background={background}>
      <Title>{title}</Title>
    </Container>
  );
};
