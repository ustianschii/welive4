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

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 10px",

  [theme.breakpoints.up("md")]: {
    minHeight: "500px",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "850px",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "900px",
  },
}));

export const Tabs = styled(MuiTabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export const Tab = styled(MuiTab)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textTransform: "none",
  border: "2px solid",
  borderColor: GREEN,
  "&.Mui-selected": {
    color: WHITE,
    backgroundColor: GREEN,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    borderRadius: "10px",
    margin: "0 10px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    borderRadius: "10px",
    margin: "0 10px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    borderRadius: "10px",
    margin: "0 10px",
  },
}));

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    border: "2px solid",
    borderColor: GREEN,
    borderRadius: "10px",
    padding: "30px",
    minHeight: "400px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 10px",
    marginTop: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
    marginTop: "30px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  margin: "20px 0",

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    margin: "5px 0",
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    margin: "5px 0",
    padding: "0 50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    margin: "5px 0",
    padding: "0",
  },
}));

export const QuoteBox = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  padding: "15px",
}));
