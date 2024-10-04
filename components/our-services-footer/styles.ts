"use client";
import {
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiBox)(({}) => ({
  width: "30%",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "25px",
  marginBottom: "10px",
}));

export const Links = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  padding: "10px 0",
  color: theme.palette.grey[300],
}));
