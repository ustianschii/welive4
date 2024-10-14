import React from "react";

import { HeaderSubtitleTypes } from "./types";
import { Box, Typography } from "./styles";

export const HeaderSubtitle: React.FC<HeaderSubtitleTypes> = ({
  first,
  second,
  third,
}) => {
  return (
    <Box>
      <Typography>{first}</Typography>
      <Typography>{second}</Typography>
      <Typography>{third}</Typography>
    </Box>
  );
};
