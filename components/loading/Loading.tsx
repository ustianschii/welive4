import { Box, CircularProgress } from "@mui/material";

import { Header } from "@/components/shared/header";
import { BLACK, GREEN } from "@/src/styles/constants";

export const Loading = () => {
  return (
    <Box>
      <Header background={{ backColor: BLACK }} />
      <Box gridColumn="1/-1" textAlign="center" height="50vh" bgcolor={BLACK}>
        <CircularProgress sx={{ color: GREEN }} />
      </Box>
    </Box>
  );
};
