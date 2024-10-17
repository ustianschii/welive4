import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { GRAY } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: GRAY,
  [theme.breakpoints.down("sm")]: {
    padding: "40px 10px",
  },
}));
