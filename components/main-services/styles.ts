import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";
import { DARK_GRAY } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    height: "900px",
    backgroundColor: DARK_GRAY,
    padding: "50px 10px",
    "& > *": {
      flex: "1 1 calc(50% - 10px)",
    },
  },
}));
