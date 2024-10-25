import React from "react";
import { BannerContainer, Button, Container, Subtitle, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const TextUs = () => {
  return (
    <Container disableGutters>
      <BannerContainer>
        <Title>TEXT US</Title>
        <Subtitle>
          Have questions or need assistance?
          <Highlighted>Text us now!</Highlighted>
        </Subtitle>
        <Button fullWidth>
          833 -<Highlighted>WE</Highlighted>-<Highlighted>LIVE</Highlighted>-
          <Highlighted>4</Highlighted>
        </Button>
      </BannerContainer>
    </Container>
  );
};
