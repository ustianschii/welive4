import React from "react";

import { SystemDesignCard } from "./card";
import { Container, Wrapper } from "./styles";
import { designTypes } from "./data";

export const DesignTypes = () => {
  return (
    <Wrapper>
      <Container>
        <SystemDesignCard data={designTypes} />
      </Container>
    </Wrapper>
  );
};
