"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { opensans } from "@/src/app/layout";
import { GREEN, SEPARATOR_BACKGROUND, WHITE } from "@/src/styles/constants";
import { ContainerProps } from "./types";

export const Container = styled(MuiBox)<ContainerProps>(
  ({ theme, background, size }) => ({
    backgroundColor: SEPARATOR_BACKGROUND,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundImage: `url(${background})`,

    [theme.breakpoints.up("md")]: {
      backgroundSize: "contain",
      padding: "30px",
    },
    [theme.breakpoints.down("md")]: {
      backgroundSize: "contain",
      padding: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "260px",
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
    fontSize: "18px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    fontSize: "15px",
    marginTop: "20px",
  },

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    marginTop: "10px",
  },
}));
