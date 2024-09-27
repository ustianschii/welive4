import {
  Card as MuiCard,
  Typography as MuiTypography,
  Button as MuiButton,
  Box as MuiBox,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";

export const Card = styled(MuiCard)(({}) => ({
  flex: " 0 1 calc(33.33% - 20px)",
  margin: "10px",
  borderRadius: "20px",
  boxSizing: "border-box",
}));

export const TitleIcon = styled(MuiBox)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Description = styled(MuiTypography)(({}) => ({}));

export const SvgIcon = styled(MuiSvgIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Button = styled(MuiButton)(({}) => ({
  borderRadius: "10px",
  textTransform: "none",
  margin: "0 0 5px 5px",
}));
