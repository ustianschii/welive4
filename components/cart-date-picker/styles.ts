import { styled } from "@mui/material/styles";
import { StaticDatePicker as MuiStaticDatePicker } from "@mui/x-date-pickers";

import {
  BOLD,
  DATE_PICKER_GRAY,
  GRAY,
  GREEN,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans } from "@/app/layout";

export const StaticDatePicker = styled(MuiStaticDatePicker)({
  backgroundColor: DATE_PICKER_GRAY,
  borderRadius: "10px",
  padding: "0",

  ".MuiDateCalendar-root": {
    backgroundColor: DATE_PICKER_GRAY,
    margin: "0",
    width: "100%",
  },

  ".MuiPickersCalendarHeader-labelContainer, .MuiDayCalendar-weekDayLabel": {
    fontWeight: SEMI_BOLD,
    fontFamily: opensans.style.fontFamily,
  },

  ".MuiPickersDay-today": {
    backgroundColor: GRAY,
    color: WHITE,
    border: "0px",
  },

  ".MuiPickersDay-root.Mui-selected, .MuiPickersDay-root.Mui-focused": {
    backgroundColor: GREEN,
    color: WHITE,
    fontWeight: BOLD,
  },

  ".MuiPickersYear-yearButton": {
    backgroundColor: GREEN,
    fontWeight: BOLD,
  },

  ".MuiPickersYear-yearButton.Mui-selected, .MuiPickersYear-yearButton.Mui-focused":
    {
      backgroundColor: GREEN,
      fontWeight: BOLD,
    },
});
