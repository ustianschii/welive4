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
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  height: "content-fit",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "30px 10px",
  },
}));

export const Card = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "400px",
      padding: "20px",
    },
  })
);

export const InnerCard = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: TRANSPARENT_GRAY,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    minHeight: "400px",
    borderRadius: "10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    padding: "0 15px",
    marginTop: "10px",
    fontSize: "13px",
  },
}));
