import React from "react";

import { SmartControlCard } from "../smart-control-card";
import { Separator } from "../shared/gray-separator";
import { Highlighted } from "../hero-title/styles";
import { Container, Title, Subtitle, CardContainer } from "./styles";
import { CardContent } from "../smart-control-card/data";

export const SmartControl = () => {
  return (
    <>
      <Container disableGutters>
        <Title>YOUR HOME-YOUR RULES</Title>
        <Subtitle>
          <Highlighted>
            SMART CONTROL <br /> AT YOUR FINGERTIPS
          </Highlighted>
        </Subtitle>
        <CardContainer>
          {CardContent.map((content, index) => (
            <SmartControlCard
              key={index}
              image={content.image}
              text={content.text}
            />
          ))}
        </CardContainer>
      </Container>
      <Separator />
    </>
  );
};
