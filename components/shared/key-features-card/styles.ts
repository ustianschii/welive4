import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { DARK_GRAY, GREEN, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const CardBox = styled(MuiBox)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  backgroundColor: DARK_GRAY,
  [theme.breakpoints.down("sm")]: {
    padding: "30px",
    marginBottom: "15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const Feature = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
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
