import React from "react";

import { Box } from "@mui/material";

import CartLayout from "./layout";
import { DatePicker } from "../../components/cart-date-picker";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { TimePicker } from "../../components/cart-time-picker";
import { BookingDetails } from "../../components/cart-booking-details";

export default function Cart() {
  return (
    <CartLayout>
      <Box bgcolor={SEPARATOR_BACKGROUND} p="0 10px">
        <DatePicker />
        <TimePicker />
        <BookingDetails />
      </Box>
    </CartLayout>
  );
}
