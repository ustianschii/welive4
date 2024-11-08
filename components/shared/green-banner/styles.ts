import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Container as MuiContainer,
} from "@mui/material";
import { ARTICLE_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: ARTICLE_BACKGROUND,
  [theme.breakpoints.down("md")]: {
    paddingBottom: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  color: WHITE,
  fontSize: "32px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 150px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  color: WHITE,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginBottom: "10px",
    fontSize: "16px",
    padding: "0 20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    fontSize: "14px",
    padding: "0 10px",
  },
}));
