import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";
import {
  SEPARATOR_BACKGROUND,
  TRANSPARENT_GRAY,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: SEPARATOR_BACKGROUND,
  justifyContent: "space-around",
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    padding: "50px 0",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "30px 10px",
    alignItems: "center",
  },
}));

export const Card = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      width: "100%",
    },
  })
);

export const InnerCard = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: TRANSPARENT_GRAY,
  borderRadius: "10px",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    padding: "50px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "100px 10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    padding: "0 15px",
    marginTop: "10px",
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 15px",
    marginTop: "10px",
    fontSize: "13px",
  },
}));
