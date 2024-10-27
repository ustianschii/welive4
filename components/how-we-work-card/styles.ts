import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";
import { SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

interface ContainerProps {
  background: string;
  size?: string;
}

export const Container = styled(MuiBox)<ContainerProps>(
  ({ theme, background, size }) => ({
    backgroundColor: SEPARATOR_BACKGROUND,
    [theme.breakpoints.down("sm")]: {
      maxHeight: "300px",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: size || "contain",
      borderRadius: "10px",
      padding: "0 15px 20px 15px",
    },
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    padding: "25px 0 15px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "13px",
  },
}));
