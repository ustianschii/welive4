import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

import { WHITE, GET_SERVICES_BACKGROUND, BLACK } from "@/styles/constants";

export const CardBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: BLACK,
  padding: "30px 20px",
  borderRadius: "10px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {},
}));

export const Board = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: GET_SERVICES_BACKGROUND,
  borderRadius: "10px",
  padding: "20px",
  justifyContent: "flex-end",

  [theme.breakpoints.down("sm")]: {
    minHeight: "140px",
  },
}));

export const ImageContainer = styled(MuiBox)(({ theme }) => ({
  flexBasis: "50%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {},
}));

export const TextContainer = styled(MuiBox)(({ theme }) => ({
  flexBasis: "50%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    padding: "0 5px",
  },
}));
