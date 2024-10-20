import React from "react";

import { Container, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { TransparentCardProps } from "./types";

export const TransparentCard: React.FC<TransparentCardProps> = ({
  data,
  index,
  titlestart,
  titlehighlightedstart,
  titleend,
  titlehighlightedend,
  bg,
}) => {
  return (
    <Container disableGutters bg={bg}>
      <Title>
        <Highlighted>{titlehighlightedstart}</Highlighted> <br />
        {titlestart}
        <Highlighted>{titlehighlightedend}</Highlighted>
        {titleend}
      </Title>
      {data[index].map((item, index) => (
        <Description key={index}>{item}</Description>
      ))}
    </Container>
  );
};
