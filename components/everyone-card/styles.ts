"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { BLACK, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    height: "350px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {},
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: BLACK,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "55px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
}));
