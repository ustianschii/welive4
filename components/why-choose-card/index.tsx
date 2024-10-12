import React from "react";
import { Container, Title } from "./styles";
import { CardTypes } from "./types";

export const Card: React.FC<CardTypes> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
