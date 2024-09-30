import {
  Box as MuiBox,
  Card as MuiCard,
  Typography as MuiTypography,
  styled,
} from "@mui/material";
import ArrowBackIosIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Wrapper = styled(MuiBox)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  marginBottom: "100px",
}));

export const ArrowBack = styled(ArrowBackIosIosIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "35px",
  "&.Mui-disabled": {
    color: "lightgray", // This will change the color when disabled
  },
}));
export const ArrowForward = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "35px",
}));

export const Card = styled(MuiCard)(({}) => ({
  display: "flex",
  width: "40%",
  margin: "0 10px",
  boxSizing: "border-box",
  minHeight: "280px",
  flexDirection: "column",
  position: "relative",
}));

export const Name = styled(MuiTypography)(({}) => ({
  // marginBottom: "10px",
}));
export const Description = styled(MuiTypography)(({}) => ({
  fontSize: "16px",
}));
export const NameRating = styled(MuiBox)(({}) => ({
  display: "flex",
  position: "absolute",
  bottom: 20,
  left: 20,
  flexDirection: "column",
}));
