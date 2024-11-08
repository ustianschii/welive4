import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  SEPARATOR_BACKGROUND,
  SUBMIT_FORM_BACKGROUND,
  BOLD,
} from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "20px 10px",
}));

export const BannerContainer = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  padding: "30px 15px",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
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
