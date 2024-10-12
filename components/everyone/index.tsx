import React from "react";
import { Highlighted } from "../hero-title/styles";
import { Title, Container, CardContainer } from "./styles";
import { Card } from "../everyone-card";
import { CardData } from "./data";
import { Separator } from "../shared/gray-separator";

export const Everyone = () => {
  return (
    <>
      <Container disableGutters>
        <Title>
          GET SOME
          <Highlighted>
            FUN <br />
          </Highlighted>
          FOR
          <Highlighted>EVERYONE</Highlighted>
        </Title>
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
