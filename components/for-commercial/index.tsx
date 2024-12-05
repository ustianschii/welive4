import React from "react";

import { Button, Container, FeaturesBox, Title } from "./styles";
import { data } from "./data";

import Image from "next/image";

import { Card } from "./card";
import { ROUTES } from "../../src/app/utils/routes-constants";

export const ForCommercial = () => {
  return (
    <Container disableGutters>
      <Image
        alt="loxone-logo"
        src="/loxone-automation/loxone-logo-commercial.png"
        width={300}
        height={60}
      />
      <Title>For Commercial</Title>
      <FeaturesBox>
        {data.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </FeaturesBox>
      <Button href={ROUTES.LOXONE_COMMERCIAL}>LEARN MORE</Button>
    </Container>
  );
};
