import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "40px 10px",
  },
}));
