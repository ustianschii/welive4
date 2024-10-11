import React from "react";

import { Card, Typography } from "./styles";

import { SmartControlCardTypes } from "./types";

export const SmartControlCard: React.FC<SmartControlCardTypes> = ({
  image,
  text,
}) => {
  return (
    <Card image={image}>
      <Typography>{text}</Typography>
    </Card>
  );
};
