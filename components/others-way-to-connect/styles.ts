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
  TEXT_US_BACKGROUND,
  BOLD,
} from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const BannerContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: TEXT_US_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    padding: "30px 15px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: BOLD,
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));
