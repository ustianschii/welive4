import React from "react";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Box } from "@mui/material";

export const Separator: React.FC<{
  children?: React.ReactNode;
  height?: string;
  padding?: string;
}> = ({ children, height, padding }) => {
  return (
    <Box
      height={height ?? "35px"}
      p={padding ?? ""}
      sx={{ backgroundColor: SEPARATOR_BACKGROUND }}
    >
      {children}
    </Box>
  );
};
