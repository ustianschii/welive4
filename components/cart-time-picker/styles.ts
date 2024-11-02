import { styled } from "@mui/material/styles";
import { Box as MuiBox, Button as MuiButton } from "@mui/material";

import { GREEN, GREEN_DARK, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const TimePickerBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0 0 0",
  },
}));

export const ButtonBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0 20px 0",
  },
}));

export const Button = styled(MuiButton)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    flex: "0 1 49%",
    border: "2px solid",
    borderColor: isSelected ? GREEN : GREEN_DARK,
    borderRadius: "10px",
    color: WHITE,
    fontFamily: opensans.style.fontFamily,
    fontWeight: SEMI_BOLD,

    [theme.breakpoints.down("sm")]: {},
  })
);
