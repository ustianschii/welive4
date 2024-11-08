import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import { SEPARATOR_BACKGROUND, BOLD, GREEN, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "10px 10px",
  display: "grid",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {},
}));

export const CardBox = styled(MuiBox)<{ image: string; imagetablet: string }>(
  ({ theme, image, imagetablet }) => ({
    backgroundSize: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${imagetablet})`,
      minHeight: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${image})`,
      minHeight: "600px",
    },
  })
);

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: "#00000099",
  [theme.breakpoints.down("md")]: {
    padding: "40px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    textAlign: "start",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  width: "220px",
  height: "50px",
  fontFamily: opensans.style.fontFamily,
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",
  margin: "10px 0",
  [theme.breakpoints.down("sm")]: {},
}));
