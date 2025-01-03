"use client";

import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { Dayjs } from "dayjs";

import { StaticDatePicker } from "./styles";

export const DatePicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={value}
        onChange={(newValue) => setValue(newValue)}
        minDate={dayjs()}
        maxDate={dayjs().add(1, "month")}
        slotProps={{
          actionBar: {
            actions: [],
          },
        }}
      />
    </LocalizationProvider>
  );
};
