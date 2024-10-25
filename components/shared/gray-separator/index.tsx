import React from "react";

import { BLACK } from "@/styles/constants";

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
      sx={{ backgroundColor: BLACK }}
    >
      {children}
    </Box>
  );
};
