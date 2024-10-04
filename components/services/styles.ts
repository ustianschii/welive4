"use client";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "100px auto",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
}));
