"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  ListItem as MuiListItem,
  Box as MuiBox,
} from "@mui/material";

import { opensans } from "@/src/app/layout";
import { WHITE, BLACK } from "@/src/styles/constants";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: BLACK,
}));

export const ServicesBox = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: BLACK,

  [theme.breakpoints.up("md")]: {
    padding: "0 30px 20px 30px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 70px 20px 70px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 30px 20px 30px",
  },
}));

export const ListItem = styled(MuiListItem)(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "2px",
  fontSize: "17px",
}));
