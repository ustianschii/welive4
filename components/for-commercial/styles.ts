import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
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
  backgroundColor: ARTICLE_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 10px",
  },
}));

export const FeaturesBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "5px",
  },
}));

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "32%",
  },
}));

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: "14px",
    margin: "5px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    fontSize: "25px",
    marginBottom: "30px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontFamily: opensans.style.fontFamily,
    fontSize: "15px",
    fontWeight: SEMI_BOLD,
    border: "2px solid",
    borderColor: GREEN,
    padding: "5px 15px",
    marginTop: "40px",
    borderRadius: "7px",
  },
}));
