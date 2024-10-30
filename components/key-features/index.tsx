import React from "react";

import { KeyFeaturesCard } from "../shared/key-features-card";

import { Container } from "./styles";
import { KeyFeaturesProps } from "./types";

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ data }) => {
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
