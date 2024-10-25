import React from "react";

import { HeaderSubtitleTypes } from "./types";
import { Box, Typography } from "./styles";

export const HeaderSubtitle: React.FC<HeaderSubtitleTypes> = ({
  first,
  second,
  third,
  other,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography>{first}</Typography>
      <Typography>{second}</Typography>
      <Typography>{third}</Typography>
      {other}
    </Box>
  );
};
