import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import {
  BLACK,
  GREEN,
  BLOG_CARD_BACKGROUND,
  SEMI_BOLD,
  SWAMP_GREEN,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLOG_CARD_BACKGROUND,
  padding: "50px 10px",

  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const FeaturesBox = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  columnGap: "20px",
  rowGap: "30px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    minHeight: "550px",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)",

    minHeight: "200px",
  },
}));

export const CardBox = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  margin: "5px 0",

  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  color: SWAMP_GREEN,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  marginTop: "10px",
  fontSize: "25px",
  marginBottom: "30px",
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: BLACK,
  fontFamily: opensans.style.fontFamily,
  width: "100%",
  fontWeight: SEMI_BOLD,
  border: "2px solid",
  borderColor: GREEN,
  marginTop: "40px",
  borderRadius: "10px",
  padding: "5px 15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));
