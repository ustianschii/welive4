import React from "react";

import { BannerContainer, Button, Wrapper, Subtitle, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const TextUs = () => {
  return (
    <Wrapper>
      <BannerContainer maxWidth="lg">
        <Title>TEXT US</Title>
        <Subtitle>
          Have questions or need assistance? <br />
          <Highlighted>Text us now!</Highlighted>
        </Subtitle>
        <Button fullWidth href="tel:8332428899">
          833 - 242 - 8899
        </Button>
      </BannerContainer>
    </Wrapper>
  );
};
