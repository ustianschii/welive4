import React from "react";
import { Container, Title, Description, CardContainer, Button } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Card } from "../how-we-works-card";
import { CardData } from "./data";

export const HowWeWorks = () => {
  return (
    <Container disableGutters>
      <Title>
        HOW WE <br />
        <Highlighted>WORKS</Highlighted>
      </Title>
      <Description>
        Providing exceptional customer care is a core value at WE LIVE 4, and we
        go above and beyond to ensure that support continues long after the
        initial stage. After the initial stage, our support continues to be
        available as we are fully committed to providing ongoing help throughout
        your entire journey with us, ensuring your satisfaction.
      </Description>
      <Description>
        From the moment you begin your purchase journey to even after it is
        finished, our commitment is to offer you prompt and attentive help,
        ensuring that you are fully satisfied.
      </Description>
      <CardContainer>
        {CardData.map((card, index) => (
          <Card
            key={index}
            background={card.background}
            description={card.description}
            title={card.title}
          />
        ))}
      </CardContainer>
      <Button>GET A FREE QUOTE!</Button>
    </Container>
  );
};
