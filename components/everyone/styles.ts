import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { DARK_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: DARK_GRAY,
    height: "content-fit",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "30px 0 20px 0",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  height: "content-fit",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0 10px",
    paddingBottom: "35px",
  },
}));
