"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
  Container as MuiContainer,
} from "@mui/material";
import {
  BOLD,
  GREEN,
  WHITE,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  padding: "10px 10px",
  display: "grid",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "10px",
  },
}));

export const CardBox = styled(MuiBox)<{ image: string; imagetablet: string }>(
  ({ theme, image, imagetablet }) => ({
    backgroundSize: "cover",
    borderRadius: "10px",

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${imagetablet})`,
      minHeight: "400px",
    },

    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${imagetablet})`,
      minHeight: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${image})`,
      minHeight: "500px",
    },
  })
);

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: "#00000099",

  [theme.breakpoints.up("md")]: {
    padding: "20px 30px",
    minHeight: "150px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    textAlign: "start",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    marginTop: "10px",
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "17px",
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  width: "220px",
  height: "40px",
  fontFamily: opensans.style.fontFamily,
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",
  margin: "10px 0 0 0",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
