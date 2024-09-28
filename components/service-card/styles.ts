import {
  Card as MuiCard,
  Typography as MuiTypography,
  Button as MuiButton,
  Box as MuiBox,
  SvgIcon as MuiSvgIcon,
  CardContent as MuiCardContent,
  styled,
} from "@mui/material";

export const Card = styled(MuiCard)(({}) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  flex: " 0 1 calc(33.33% - 20px)",
  margin: "10px",
  borderRadius: "20px",
  boxSizing: "border-box",
  minHeight: "300px",
}));

export const CardContent = styled(MuiCardContent)(({}) => ({
  flexGrow: 1,
  padding: "20px",
}));

export const TitleIcon = styled(MuiBox)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Description = styled(MuiTypography)(({}) => ({
  fontFamily: "roboto",
  fontSize: "16px",
  marginBottom: "40px",
}));

export const SvgIcon = styled(MuiSvgIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Button = styled(MuiButton)(({}) => ({
  position: "absolute",
  bottom: "15px",
  left: "15px",
  borderRadius: "10px",
  textTransform: "none",
}));
