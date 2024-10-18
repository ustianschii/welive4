import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { DARK_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: DARK_GRAY,
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: "30px",
    padding: "30px 0 20px 0",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
    padding: "0 10px",
    paddingBottom: "35px",
  },
}));
