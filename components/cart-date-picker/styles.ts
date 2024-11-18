"use client";

import { styled } from "@mui/material/styles";
import { StaticDatePicker as MuiStaticDatePicker } from "@mui/x-date-pickers";
import { Container as MuiContainer } from "@mui/material";

import {
  BLACK,
  BOLD,
  DATE_PICKER_GRAY,
  GRAY,
  GREEN,
  SEMI_BOLD,
} from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const DateTimePickerContainer = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 70px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
  },
}));

export const StaticDatePicker = styled(MuiStaticDatePicker)(({ theme }) => ({
  backgroundColor: DATE_PICKER_GRAY,
  borderRadius: "10px",

  [theme.breakpoints.up("md")]: {
    padding: "0 200px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 200px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },

  ".MuiPickersDay-root.Mui-selected": {
    backgroundColor: GREEN,
    color: "white",
    fontWeight: BOLD,
  },

  ".MuiPickersDay-root.Mui-selected:hover": {
    backgroundColor: GREEN,
    color: "white",
    fontWeight: BOLD,
  },

  ".MuiDateCalendar-root": {
    backgroundColor: DATE_PICKER_GRAY,
    margin: "0",
    width: "100%",
  },
  ".MuiPickersCalendarHeader-labelContainer": {
    fontWeight: SEMI_BOLD,
    fontFamily: opensans.style.fontFamily,
  },
  ".MuiDayCalendar-weekDayLabel": {
    fontWeight: SEMI_BOLD,
    fontFamily: opensans.style.fontFamily,
  },
  ".MuiPickersDay-today": {
    fontWeight: SEMI_BOLD,
    backgroundColor: GRAY,
    color: BLACK,
    border: "0px",
  },

  ".MuiPickersDay-root.Mui-focused": {
    backgroundColor: GREEN,
    color: "white",
    fontWeight: BOLD,
  },
  ".MuiPickersYear-yearButton": {
    backgroundColor: GREEN,
    fontWeight: BOLD,
  },
  ".MuiPickersYear-today": {
    backgroundColor: GREEN,
    fontWeight: BOLD,
  },

  ".MuiPickersYear-yearButton.Mui-selected": {
    backgroundColor: GREEN,
    fontWeight: BOLD,
  },
  ".MuiPickersYear-yearButton.Mui-focused": {
    backgroundColor: GREEN,
    fontWeight: BOLD,
  },
}));
