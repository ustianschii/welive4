"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

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
      minHeight: "320px",
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

  [theme.breakpoints.up("md")]: {
    padding: "0 5px 20px 5px",
    fontSize: "15px",
    lineHeight: "1.3",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 20px 20px 20px",
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 5px 20px 5px",
    fontSize: "14px",
  },
}));
