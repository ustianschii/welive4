"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { GREEN, SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

interface ContainerProps {
  background: string;
  size?: string;
}

export const Container = styled(MuiBox)<ContainerProps>(
  ({ theme, background, size }) => ({
    backgroundColor: SEPARATOR_BACKGROUND,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundImage: `url(${background})`,

    [theme.breakpoints.up("md")]: {
      backgroundSize: "contain",
      padding: "40px",
    },
    [theme.breakpoints.down("md")]: {
      backgroundSize: "contain",
      padding: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "300px",
      backgroundSize: size ?? "contain",
      padding: "20px 15px",
    },
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    fontSize: "17px",
    marginTop: "20px",
  },

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "13px",
    marginTop: "10px",
  },
}));
