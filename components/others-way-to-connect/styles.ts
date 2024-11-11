import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  SUBMIT_FORM_BACKGROUND,
  BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
}));

export const Container = styled(MuiContainer)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  padding: "20px 10px",
}));

export const BannerContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",

  [theme.breakpoints.up("md")]: {
    padding: "40px 150px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "40px 100px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "30px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    margin: "10px 0 0 20px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    margin: "10px 0 0 20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    margin: "0 0 0 20px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: BOLD,
  fontSize: "28px",
}));
