import React from "react";
import { Container, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Separator } from "../shared/gray-separator";

export const SystemDesign = () => {
  return (
    <>
      <Container>
        <Title>
          SYSTEM<Highlighted>DESIGN</Highlighted>
        </Title>
        <Description>
          At WE LIVE 4, we&apos;re dedicated to your satisfaction, right from
          the beginning to the end. Our seamless design process ensures that
          your unique needs are met while also saving your valuable time and
          money.
        </Description>
        <Description>
          We believe in optimizing system performance to its fullest potential.
           Trust us for expert advice and enjoy free consultations — we&apos;re
          here to turn your vision into reality!
        </Description>
      </Container>
      <Separator />
    </>
  );
};
