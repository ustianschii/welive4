import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)<{
  flex: string;
  maxW: string;
  gap: string;
}>(({ theme, flex, gap, maxW }) => ({
  display: "flex",
  backgroundColor: SEPARATOR_BACKGROUND,
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    padding: "40px 0",
    "& > *": {
      flex: flex,
      maxWidth: maxW,
    },
    justifyContent: "space-between",
    gap: gap,
  },
  [theme.breakpoints.down("md")]: {
    gap: "10px",
    padding: "40px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
