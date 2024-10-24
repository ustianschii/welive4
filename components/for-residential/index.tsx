import React from "react";

import { Button, Container, FeaturesBox, Title } from "./styles";
import { data } from "./data";

import Image from "next/image";

import { Card } from "./card";

export const ForResidential = () => {
  return (
    <Container disableGutters>
      <Image
        alt="loxone-logo"
        src="/loxone-automation/loxone-logo.png"
        width={300}
        height={70}
      />
      <Title>For Residential</Title>
      <FeaturesBox>
        {data.map((card, index) => (
          <Card key={index} icon={card.icon} text={card.text} />
        ))}
      </FeaturesBox>
      <Button>LEARN MORE</Button>
    </Container>
  );
};
