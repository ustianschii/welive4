import React from "react";

import Image from "next/image";

import { KeyFeaturesCardTypes } from "./types";

import { CardBox, Title, Feature, Dot } from "./styles";

import { Box, List, ListItem } from "@mui/material";

export const KeyFeaturesCard: React.FC<KeyFeaturesCardTypes> = ({
  icon,
  title,
  features,
}) => {
  return (
    <CardBox>
      <Box display="flex" alignItems="center" pb="30px">
        <Image
          alt="feature-card-icon"
          src={icon}
          width={80}
          height={75}
          style={{ marginRight: "10px", objectFit: "contain" }}
        />
        <Title>{title}</Title>
      </Box>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start" }}>
            <Dot />
            <Feature>{feature}</Feature>
          </ListItem>
        ))}
      </List>
    </CardBox>
  );
};
