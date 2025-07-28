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
              GET SOME<Highlighted mRight="5px">FUN</Highlighted>FOR
              <Highlighted>EVERYONE</Highlighted>
            </Title>
          </BorderBox>
        </TitleBox>
        <CardContainer>
          {CardData.map((data) => (
            <Card
              key={data.title}
              background={data.background}
              title={data.title}
            />
          ))}
        </CardContainer>
      </Container>
      <Separator />
    </>
  );
};
