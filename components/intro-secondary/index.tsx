import React from "react";
import {
  Title,
  Wrapper,
  Mission,
  Description,
  Highlight,
} from "../intro/styles";

export const IntroSecondary = () => {
  return (
    <Wrapper disableGutters>
      <Title variant="h2">
        A <Highlight>smarter</Highlight> way to live
      </Title>
      <Mission>
        <Description>
          Smart technology has many cool designs and solutions to make your life
          more comfortable and bring additional passive income to your
          household, not to mention more fun!
        </Description>
      </Mission>
    </Wrapper>
  );
};
