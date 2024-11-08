import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)<{ bg: string }>(({ bg }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  padding: "45px 25px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));
