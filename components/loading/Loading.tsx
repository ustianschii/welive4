import { Box, CircularProgress } from "@mui/material";

import { GREEN } from "@/src/styles/constants";

export const Loading = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <CircularProgress sx={{ color: GREEN }} />
    </Box>
  );
};
