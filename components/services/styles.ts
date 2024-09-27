import { Container as MuiContainer, styled } from "@mui/material";

export const Wrapper = styled(MuiContainer)(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "100px auto",
}));
