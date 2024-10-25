import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import { BLACK, BOLD, GREEN, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: BLACK,
  padding: "0 10px",
  display: "grid",
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));

export const CardBox = styled(MuiBox)<{ image: string }>(
  ({ theme, image }) => ({
    backgroundImage: `url(${image})`,
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
      borderRadius: "10px",
      minHeight: "600px",
    },
  })
);

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: "#00000099",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    paddingBottom: "20px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "220px",
    height: "50px",
    fontFamily: opensans.style.fontFamily,
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
    margin: "10px 0",
  },
}));
