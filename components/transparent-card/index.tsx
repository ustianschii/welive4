import React from "react";

import { Container, Description, Title, Wrapper } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { TransparentCardProps } from "./types";
import { Box } from "@mui/material";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

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
    <Wrapper>
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
    </Wrapper>
  );
};
