import React from "react";

import Image from "next/image";

import { Button, Container, FeaturesBox, Title } from "./styles";
import { data } from "./data";
import { Card } from "./card";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const ForResidential = () => {
  return (
    <Container disableGutters>
      <Image
        alt="loxone-logo"
        src="/loxone-automation/loxone-logo.png"
        width={300}
        height={60}
      />
      <Title>For Residential</Title>
      <FeaturesBox>
        {data.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </FeaturesBox>
      <Button href={ROUTES.LOXONE_RESIDENTIAL}>LEARN MORE</Button>
    </Container>
  );
};
