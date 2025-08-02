import { Box, CircularProgress } from "@mui/material";

import { GREEN } from "@/src/styles/constants";

export const Loading = () => {
  return (
    <Box gridColumn="1/-1" textAlign="center">
      <CircularProgress sx={{ color: GREEN }} />
    </Box>
  );
};
