"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { raleway } from "@/src/app/layout";
import { WHITE } from "@/src/styles/constants";

export const Card = styled(MuiBox)<{ image: string; imagetablet: string }>(
  ({ theme, image, imagetablet }) => ({
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${imagetablet})`,
      minHeight: "350px",
      boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)",
    },

    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${imagetablet})`,
      minHeight: "450px",
    },

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${image})`,
      minHeight: "310px",
    },
  })
);

export const Typography = styled(MuiTypography)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  display: "flex",
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "5px",
  lineHeight: "1.3",

  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
    minHeight: "22%",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "12px",
    minHeight: "22%",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
    minHeight: "20%",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    minHeight: "30%",
  },
}));
