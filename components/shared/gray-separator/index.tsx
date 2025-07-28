import React from "react";
import { Box } from "@mui/material";

import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";

export const Separator: React.FC<{
  children?: React.ReactNode;
  height?: string;
  padding?: string;
}> = ({ children, height = "35px", padding = "" }) => {
  return (
    <Box height={height} p={padding} bgcolor={MAIN_SERVICES_BACKGROUND}>
      {children}
    </Box>
  );
};
