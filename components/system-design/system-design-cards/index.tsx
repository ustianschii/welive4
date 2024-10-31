import React from "react";

import { SystemDesignCard } from "./card";
import { Container } from "./styles";
import { designTypes } from "./data";

export const DesignTypes = () => {
  return (
    <Container>
      <SystemDesignCard data={designTypes} />
    </Container>
  );
};
