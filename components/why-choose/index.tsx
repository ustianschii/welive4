import React from "react";
import { Container, Title, CardContainer } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Card } from "../why-choose-card";
import { content } from "./data";

export const WhyChoose = () => {
  return (
    <Container disableGutters>
      <Title>
        WHY CHOOSE <Highlighted>WE LIVE 4</Highlighted>
      </Title>
      <CardContainer>
        {content.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </CardContainer>
    </Container>
  );
};
