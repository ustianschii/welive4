import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { BOLD, WHITE } from "../../../src/styles/constants";
import { opensans } from "@/app/layout";

export const Button = styled(MuiButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    color: WHITE,
    width: "300px",
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "20px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "1px solid white",
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));