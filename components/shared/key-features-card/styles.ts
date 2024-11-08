import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { MAIN_SERVICES_BACKGROUND, GREEN, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const CardBox = styled(MuiBox)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.down("md")]: {
    width: "49%",
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "30px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Feature = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.2",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Dot = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: "white",
  marginRight: "10px",
  marginTop: "6px",
  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "6px",
  },
}));
