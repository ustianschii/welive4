import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { opensans } from "@/app/layout";

export const Box = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "0 20px",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    margin: "0 10px 10px 10px",
  },
}));
