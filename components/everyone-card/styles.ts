import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { BLACK, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      height: "300px",
      borderRadius: "10px",
    },
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: BLACK,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
}));
