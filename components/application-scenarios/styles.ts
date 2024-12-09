"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  TRANSPARENT_GRAY,
  WHITE,
} from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  justifyContent: "space-around",
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    padding: "70px 0",
  },

  [theme.breakpoints.down("md")]: {
    padding: "50px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "30px 10px",
    alignItems: "center",
  },
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    "& > *": {
      flex: "1 1 calc(33.33% )",
      maxWidth: "calc(33.33% )",
      boxSizing: "border-box",
    },
  },
}));

export const Card = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      padding: "20px",
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      width: "100%",
    },
  })
);

export const InnerCard = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: TRANSPARENT_GRAY,
  borderRadius: "10px",
  height: "100%",

  [theme.breakpoints.up("md")]: {
    padding: "30px 10px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "50px 10px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 10px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
    marginTop: "10px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 15px",
    marginTop: "10px",
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 15px",
    marginTop: "10px",
    fontSize: "13px",
  },
}));
