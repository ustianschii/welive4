import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { WHITE, GREEN, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Button = styled(MuiButton)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "16px",
  padding: "5px 30px",
  [theme.breakpoints.down("sm")]: {},
}));
