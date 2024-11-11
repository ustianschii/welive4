import React from "react";

import {
  Card,
  Wrapper,
  InnerCard,
  Title,
  Description,
  Container,
} from "./styles";

import { data } from "./data";
import { Highlighted } from "../hero-title/styles";

export const ApplicationScenarios = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters>
        {data.map((item, index) => (
          <Card key={index} background={item.backgroundImg}>
            <InnerCard>
              <Title>
                <Highlighted>{item.title}</Highlighted>
              </Title>
              {item.description.map((desc, idx) => (
                <Description key={idx}>{desc}</Description>
              ))}
            </InnerCard>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};
