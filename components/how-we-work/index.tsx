import React from "react";

import { Container, Title, Description, CardContainer, Button } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Card } from "../how-we-work-card";
import { CardData } from "./data";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const HowWeWork = () => {
  return (
    <Container disableGutters>
      <Title>
        HOW WE
        <Highlighted mLeft="5px">WORK</Highlighted>
      </Title>
      <Description>
        Exceptional customer care is a core value at WE LIVE 4. We go above and
        beyond to support you long after your initial stage. We are fully
        committed to providing ongoing help throughout your entire journey with
        us. Your satisfaction is our top priority. From the moment you start
        your design journey, we are here for you. Even after your home build or
        renovation is complete, we offer prompt and attentive support. We ensure
        that you feel fully satisfied every step of the way.
      </Description>
      <CardContainer>
        {CardData.map((card) => (
          <Card
            key={card.title}
            background={card.background}
            size={card.size}
            description={card.description}
            title={card.title}
          />
        ))}
      </CardContainer>
      <Button href={ROUTES.CONSULTATION}>REQUEST A CONSULTATION</Button>
    </Container>
  );
};
