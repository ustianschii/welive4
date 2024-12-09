import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  GREEN,
  WHITE,
  SEPARATOR_BACKGROUND,
  ARTICLE_BACKGROUND,
  SEMI_BOLD,
} from "@/src/styles/constants";
import { opensans, raleway } from "../app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const ArticleContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: ARTICLE_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    padding: "10px 10px",
  },
}));

export const PublishDate = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    margin: "10px 0",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    margin: "20px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  lineHeight: "1.4",

  [theme.breakpoints.down("sm")]: {
    margin: "10px 0",
    fontSize: "15px",
  },
}));

export const ReadMore = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.4",

  [theme.breakpoints.down("sm")]: {
    margin: "10px 0",
    fontSize: "17px",
  },
}));
