import React from "react";
import { HeaderTextBox, Title, Highlighted, Subtitle } from "./styles";

export const HeroTitle = () => {
  return (
    <HeaderTextBox>
      <Title>
        WELCOME TO<Highlighted>WE LIVE 4</Highlighted>
      </Title>
      <Subtitle>
        YOUR HOME IS <br /> YOUR <br />
        <Highlighted>SMART FUTURE</Highlighted>
      </Subtitle>
    </HeaderTextBox>
  );
};
