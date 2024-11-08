import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "40px 10px",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
