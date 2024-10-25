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
  border,
  bgcolor,
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
        <CardBox key={index} border={border ?? ""} bgcolor={bgcolor}>
          <CardTitle>{item.title}</CardTitle>
          <Description>{item.firstdescription}</Description>
          <Description>{item.seconddescription}</Description>
          <Description>{item.thirddescription}</Description>
        </CardBox>
      ))}
    </Container>
  );
};
