import { styled } from "@mui/material/styles";

import { Typography as MuiTypography } from "@mui/material";
import { WHITE } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";

export const LinkLabel = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));
