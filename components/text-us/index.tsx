import React from "react";

import { BannerContainer, Button, Wrapper, Subtitle, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const TextUs = () => {
  return (
    <Wrapper>
      <BannerContainer maxWidth="lg">
        <Title>CALL US</Title>
        <Subtitle>
          Have questions or need assistance? <br />
          <Highlighted>Call us now!</Highlighted>
        </Subtitle>
        <Button fullWidth href="tel:+13023949656">
          +1-302-394-9656
        </Button>
      </BannerContainer>
    </Wrapper>
  );
};
