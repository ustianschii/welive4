import { styled } from "@mui/material/styles";
import { Box as MuiBox, Button as MuiButton } from "@mui/material";

import { GRAY, GREEN, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const TimePickerBox = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "30px 0 0 0",
}));

export const ButtonBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    gap: "20px",
    margin: "10px 0 20px 0",
  },
  [theme.breakpoints.down("md")]: {
    gap: "10px",
    margin: "10px 0 20px 0",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
  },
}));

export const Button = styled(MuiButton)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    flex: "0 1 49%",
    border: "2px solid",
    borderColor: isSelected ? GREEN : GRAY,
    borderRadius: "10px",
    color: WHITE,
    fontFamily: opensans.style.fontFamily,
    fontWeight: SEMI_BOLD,

    [theme.breakpoints.down("sm")]: {},
  })
);
