import { styled } from "@mui/material/styles";
import { Typography as MuiTypography } from "@mui/material";
import { WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Paragraph = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
