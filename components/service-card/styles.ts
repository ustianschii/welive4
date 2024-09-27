import {
  Card as MuiCard,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const Card = styled(MuiCard)(({}) => ({
  flex: " 0 1 calc(33.33% - 20px)",
  maxWidth: "345px",
  margin: "10px",
  borderRadius: "20px",
  boxSizing: "border-box",
}));

export const Description = styled(MuiTypography)(({}) => ({}));
