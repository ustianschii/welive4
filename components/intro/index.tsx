import React from "react";
import {
  Title,
  Wrapper,
  Mission,
  SubscribeContainer,
  SubscribeButton,
  Description,
  TextField,
  Highlight,
} from "./styles";

export const IntroText = () => {
  return (
    <Wrapper disableGutters>
      <Title variant="h2">
        Welcome to <Highlight>WeLive4</Highlight>
        your home is your <Highlight>smart future</Highlight>
      </Title>
      <Mission>
        <Description>
          Our mission is to make your exerience as smooth and fulfilling as
          possible. We provide expert advice, transparent communication.
        </Description>
        <SubscribeContainer>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
          />
          <SubscribeButton variant="contained">Let&apos;s go</SubscribeButton>
        </SubscribeContainer>
      </Mission>
    </Wrapper>
  );
};
