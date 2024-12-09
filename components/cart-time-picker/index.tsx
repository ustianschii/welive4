"use client";

import React, { useState } from "react";

import { Typography } from "@mui/material";

import { TimePickerBox, ButtonBox, SelectionButton } from "./styles";
import { GRAY, GREEN, WHITE } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";

export const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleButtonClick = (time: string) => {
    setSelectedTime(time);
  };

  const shifts = ["5:00 PM", "7:00 PM", "11:00 PM", "09:00 PM"];

  return (
    <TimePickerBox>
      <Typography
        fontFamily={opensans.style.fontFamily}
        fontSize="15px"
        color={WHITE}
      >
        SATURDAY, NOVEMBER 2
      </Typography>

      <ButtonBox>
        {shifts.map((time) => (
          <SelectionButton
            key={time}
            variant="outlined"
            onClick={() => handleButtonClick(time)}
            sx={{
              borderColor: selectedTime === time ? GREEN : GRAY,
            }}
          >
            {time}
          </SelectionButton>
        ))}
      </ButtonBox>
    </TimePickerBox>
  );
};
