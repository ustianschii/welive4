import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Tab as MuiTab,
  Tabs as MuiTabs,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";
import { GREEN, SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "30px 10px 30px 10px",
  },
}));

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const Tab = styled(MuiTab)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textTransform: "none",
  border: "2px solid",
  borderColor: GREEN,

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    borderRadius: "10px",
    margin: "0 10px",
    "&.Mui-selected": {
      color: WHITE,
      backgroundColor: GREEN,
    },
  },
}));

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px solid",
  borderColor: GREEN,
  [theme.breakpoints.down("sm")]: {
    marginTop: "30px",
    padding: "0 10px",
    borderRadius: "15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
    fontSize: "18px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    margin: "5px 0",
  },
}));

export const QuoteBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
    padding: "15px",
  },
}));
