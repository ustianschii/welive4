import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  SEPARATOR_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  paddingTop: "30px",
}));

export const ContentBox = styled(MuiBox)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    padding: "30px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "35px 30px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  padding: "0 40px",
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "15px",
  },
}));
