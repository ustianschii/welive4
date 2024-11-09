import React from "react";

import { SmartControlCard } from "./smart-control-card";
import { Separator } from "../shared/gray-separator";
import { Highlighted } from "../hero-title/styles";
import {
  Container,
  Title,
  Subtitle,
  CardContainer,
  TitleBox,
  BorderBox,
} from "./styles";
import { CardContent } from "./smart-control-card/data";

export const SmartControl = () => {
  return (
    <>
      <Container disableGutters>
        <TitleBox>
          <BorderBox>
            <Title>YOUR HOME - YOUR RULES</Title>
            <Subtitle>
              <Highlighted>SMART CONTROL AT YOUR FINGERTIPS</Highlighted>
            </Subtitle>
          </BorderBox>
        </TitleBox>
        <CardContainer>
          {CardContent.map((content, index) => (
            <SmartControlCard
              key={index}
              image={content.image}
              imagetablet={content.imagetablet}
              text={content.text}
            />
          ))}
        </CardContainer>
      </Container>
      <Separator />
    </>
  );
};
