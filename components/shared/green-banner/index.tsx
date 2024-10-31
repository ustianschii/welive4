import React from "react";

import { GreenBannerProps } from "./types";
import { Container, Description, Title } from "./styles";
import { Highlighted } from "../../hero-title/styles";

export const GreenBanner: React.FC<GreenBannerProps> = ({
  title,
  first_description,
  second_description,
  titlestart,
  titleend,
  titlehighlightedstart,
  titlehighlightedend,
}) => {
  return (
    <Container disableGutters>
      <Title>
        {title}
        <Highlighted mRight="0px">{titlehighlightedstart}</Highlighted>
        {titlestart}
        <Highlighted>{titlehighlightedend}</Highlighted>
        {titleend}
      </Title>
      <Description>{first_description}</Description>
      <Description>{second_description}</Description>
    </Container>
  );
};
