"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer, Box as MuiBox } from "@mui/material";
import { SEPARATOR_BACKGROUND } from "./constants";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
}));
export const Container = styled(MuiContainer)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
}));
