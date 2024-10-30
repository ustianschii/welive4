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
  [theme.breakpoints.down("sm")]: {
    padding: "30px",
    marginBottom: "15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Feature = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    lineHeight: "1.2",
  },
}));

export const Dot = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: "6px",
    marginRight: "10px",
    marginTop: "6px",
  },
}));
