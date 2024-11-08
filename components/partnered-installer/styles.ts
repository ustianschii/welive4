import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";
import {
  ARTICLE_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: ARTICLE_BACKGROUND,

  [theme.breakpoints.down("md")]: {
    padding: "30px 15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 15px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  textAlign: "center",
  fontSize: "30px",
  lineHeight: "1.2",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  marginTop: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",
  backgroundColor: WHITE,
  textTransform: "uppercase",
  width: "100%",
  margin: "30px 0",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
