import React from "react";

import Image from "next/image";

import { ListItem } from "@mui/material";

import { KeyFeaturesCardTypes } from "./types";
import { CardBox, Title, Feature, Dot, CustomList, Wrapper } from "./styles";

export const KeyFeaturesCard: React.FC<KeyFeaturesCardTypes> = ({
  icon,
  title,
  features,
}) => {
  return (
    <CardBox>
      <Wrapper>
        <Image
          alt="feature-card-icon"
          src={icon}
          width={80}
          height={75}
          style={{ marginRight: "10px", objectFit: "contain" }}
        />
        <Title>{title}</Title>
      </Wrapper>
      <CustomList>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start" }}>
            <Dot />
            <Feature>{feature}</Feature>
          </ListItem>
        ))}
      </CustomList>
    </CardBox>
  );
};
