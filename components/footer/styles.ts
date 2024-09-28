import {
  Container as MuiContainer,
  Box as MuiBox,
  styled,
} from "@mui/material";

export const FooterContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.grey[900],
  padding: "70px 0",
}));

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[900],
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "70%",
  backgroundColor: theme.palette.grey[900],
}));
