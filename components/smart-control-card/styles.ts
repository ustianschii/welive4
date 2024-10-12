import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";
import { WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Card = styled(MuiBox)<{ image: string }>(({ theme, image }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  display: "flex",
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "0 5px 20px 5px",
  },
}));
