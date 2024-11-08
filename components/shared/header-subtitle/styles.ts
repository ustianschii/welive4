import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { raleway } from "@/app/layout";

export const Box = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "20px 20px",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  margin: "0 10px 10px 10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
