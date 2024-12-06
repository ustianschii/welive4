import React from "react";

import { HeaderSubtitleTypes } from "./types";
import { Box, Typography } from "./styles";

export const HeaderSubtitle: React.FC<HeaderSubtitleTypes> = ({
  first,
  second,
  third,
  other,
}) => {
  const descriptions = [first, second, third].filter(Boolean);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {descriptions.map((desc, index) => (
        <Typography key={index + 1}>{desc}</Typography>
      ))}
      {other}
    </Box>
  );
};
