import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Button as MuiButton } from "@mui/material";
import { WHITE, BOLD } from "@/styles/constants";

export const Background = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  border: "1px solid white",
  fontWeight: BOLD,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "10px 0",
  },
}));
