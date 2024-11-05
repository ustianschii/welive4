"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import { MAIN_SERVICES_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "50px 70px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "35px 10px",
  },
}));

export const LogoContainer = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const LinkTypography = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  "&:visited": {
    color: "white",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const ReviewsContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  [theme.breakpoints.down("md")]: {
    gap: "100px",
    marginTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    marginTop: "0px",
  },
}));
