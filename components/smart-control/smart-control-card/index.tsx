import React from "react";

import { Card, Typography } from "./styles";

import { SmartControlCardTypes } from "./types";

export const SmartControlCard: React.FC<SmartControlCardTypes> = ({
  image,
  text,
  imagetablet,
}) => {
  return (
    <Card image={image} imagetablet={imagetablet}>
      <Typography>{text}</Typography>
    </Card>
  );
};
