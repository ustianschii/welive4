import React from "react";

import { GreenBannerTypes } from "./types";
import { Container, Description, Title } from "./styles";

export const GreenBanner: React.FC<GreenBannerTypes> = ({
  title,
  first_description,
  second_description,
}) => {
  return (
    <Container disableGutters>
      <Title>{title}</Title>
      <Description>{first_description}</Description>
      <Description>{second_description}</Description>
    </Container>
  );
};
