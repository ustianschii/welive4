import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  BOLD,
  SUBMIT_FORM_BACKGROUND,
  SEMI_BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { raleway, opensans } from "@/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("md")]: {
    padding: "20px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "20px 15px",
  },
}));

export const BannerContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  padding: "100px 15px",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {
    maxWidth: "1150px",
    padding: "50px 15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  margin: "20px 0",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",

  [theme.breakpoints.up("md")]: {
    width: "40%",
    height: "50px",
  },

  [theme.breakpoints.down("md")]: {
    width: "70%",
    height: "60px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "50px",
  },
}));
