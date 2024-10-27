import React from "react";

import { Description, Title, Container } from "./styles";
import { CardTypes } from "./types";

export const Card: React.FC<CardTypes> = ({
  background,
  title,
  description,
  size,
}) => {
  return (
    <Container background={background} size={size}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
