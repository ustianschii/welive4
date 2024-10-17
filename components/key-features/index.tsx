import React from "react";

import { KeyFeaturesCard } from "../shared/key-features-card";

import { data } from "./data";
import { Container } from "./styles";

export const KeyFeatures = () => {
  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <KeyFeaturesCard
          key={index}
          icon={item.icon}
          title={item.title}
          features={item.features}
        />
      ))}
    </Container>
  );
};
