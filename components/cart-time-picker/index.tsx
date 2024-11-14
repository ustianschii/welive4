"use client";

import React, { useState } from "react";

import { Typography, Button } from "@mui/material";

import { TimePickerBox, ButtonBox } from "./styles";
import { GRAY, GREEN, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

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
          <Button
            key={time}
            variant="outlined"
            onClick={() => handleButtonClick(time)}
            sx={{
              flex: "0 1 49%",
              border: "2px solid",
              borderColor: selectedTime === time ? GREEN : GRAY,
              borderRadius: "10px",
              color: WHITE,
              fontFamily: opensans.style.fontFamily,
              fontWeight: SEMI_BOLD,
            }}
          >
            {time}
          </Button>
        ))}
      </ButtonBox>
    </TimePickerBox>
  );
};
