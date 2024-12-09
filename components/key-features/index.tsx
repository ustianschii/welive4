import React from "react";

import { Box } from "@mui/material";

import { KeyFeaturesCard } from "@/components/shared/key-features-card";
import { Container } from "./styles";
import { KeyFeaturesProps } from "./types";
import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({
  data,
  maxw,
  gap,
  flex,
}) => {
  return (
    <Box sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
      <Container maxWidth="lg" disableGutters flex={flex} gap={gap} maxw={maxw}>
        {data.map((item) => (
          <KeyFeaturesCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            features={item.features}
          />
        ))}
      </Container>
    </Box>
  );
};
