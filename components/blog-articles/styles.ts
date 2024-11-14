import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  SEPARATOR_BACKGROUND,
  BOLD,
  BLOG_CARD_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLOG_CARD_BACKGROUND,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    minHeight: "500px",
    marginBottom: "30px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "19px",
    margin: "10px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const PublishDate = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  display: "block",
  color: GREEN,
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "50px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "18px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
    margin: "40px auto  0 auto",
  },
}));
