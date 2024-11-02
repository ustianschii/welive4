import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { WHITE, GREEN_DARK, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Button = styled(MuiButton)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN_DARK,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "18px",
  padding: "5px 30px",
  [theme.breakpoints.down("sm")]: {},
}));
