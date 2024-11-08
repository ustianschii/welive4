import React from "react";

import { GreenDivider } from "../green-divider";
import { Highlighted } from "../../hero-title/styles";
import { ContentSeparatorProps } from "./types";
import { Container, Description, Title } from "./styles";

export const ContentSeparator: React.FC<ContentSeparatorProps> = ({
  titlestart,
  titleend,
  titlehighlightedstart,
  titlehighlightedend,
  description,
  bg,
  tabletbg,
  containerpadding,
  titlepadding,
}) => {
  return (
    <>
      <GreenDivider />
      <Container
        disableGutters
        bg={bg}
        tabletbg={tabletbg}
        containerpadding={containerpadding}
      >
        <Title titlepadding={titlepadding}>
          <Highlighted>{titlehighlightedstart}</Highlighted> <br />
          {titlestart}
          <Highlighted>{titlehighlightedend}</Highlighted>
          {titleend}
        </Title>
        <Description>{description}</Description>
      </Container>
      <GreenDivider />
    </>
  );
};
