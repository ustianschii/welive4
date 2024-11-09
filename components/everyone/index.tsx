import React from "react";

import { Highlighted } from "../hero-title/styles";
import { Title, Container, CardContainer, TitleBox, BorderBox } from "./styles";
import { Card } from "../everyone-card";
import { CardData } from "./data";
import { Separator } from "../shared/gray-separator";

export const Everyone = () => {
  return (
    <>
      <Container disableGutters>
        <TitleBox>
          <BorderBox>
            <Title>
              GET SOME<Highlighted>FUN</Highlighted>FOR
              <Highlighted>EVERYONE</Highlighted>
            </Title>
          </BorderBox>
        </TitleBox>
        <CardContainer>
          {CardData.map((data, index) => (
            <Card key={index} background={data.background} title={data.title} />
          ))}
        </CardContainer>
      </Container>
      <Separator />
    </>
  );
};
