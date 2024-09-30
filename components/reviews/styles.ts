import {
  Container as MuiContainer,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)(({}) => ({
  marginTop: "100px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
  marginBottom: "100px",
}));
