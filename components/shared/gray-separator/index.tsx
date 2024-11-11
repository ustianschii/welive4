import React from "react";

import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

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
      sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}
    >
      {children}
    </Box>
  );
};
