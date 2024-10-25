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
import { opensans, raleway } from "@/app/layout";

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

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    margin: "25px 0",
  },
}));

export const FeaturesBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
  },
}));

export const Feature = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: WHITE,
  flex: "0 0 calc(50% - 16px)",

  [theme.breakpoints.down("sm")]: {
    borderRadius: "5px",
  },
}));

export const FeatureText = styled(MuiTypography)(({ theme }) => ({
  flexDirection: "column",
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "5px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: BOLD,
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    margin: "20px",
  },
}));

export const Address = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const WorkingHours = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));
