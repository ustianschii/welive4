import styled from "@emotion/styled";
import { Typography as MuiTypography } from "@mui/material";

export const Typography = styled(MuiTypography)(({}) => ({
  // marginRight: theme.spacing(2),
  display: "flex",
  // [theme.breakpoints.down("md")]: {
  //   display: "none",
  // },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
}));
