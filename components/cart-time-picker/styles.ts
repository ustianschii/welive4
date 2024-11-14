import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

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
