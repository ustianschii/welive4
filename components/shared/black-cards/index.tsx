import React from "react";

import { CardBox, Container, CardTitle, Description, Title } from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { BlackCardsBoxProps } from "./types";

export const BlackCardsBoxShared: React.FC<BlackCardsBoxProps> = ({
  data,
  titlestart,
  titleend,
  titlehighlightedstart,
  titlehighlightedend,
}) => {
  return (
    <Container disableGutters>
      <Title>
        <Highlighted>{titlehighlightedstart}</Highlighted> <br />
        {titlestart}
        <Highlighted>{titlehighlightedend}</Highlighted>
        {titleend}
      </Title>
      {data.map((item, index) => (
        <CardBox key={index}>
          <CardTitle>{item.title}</CardTitle>
          <Description>{item.firstdescription}</Description>
          <Description>{item.seconddescription}</Description>
        </CardBox>
      ))}
    </Container>
  );
};
