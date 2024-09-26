import { Container as MuiContainer, styled } from "@mui/material";

export const FooterContainer = styled(MuiContainer)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
}));
