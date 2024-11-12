import React from "react";

import { Box, Container } from "@mui/material";
import theme from "@/styles/theme";

import CartLayout from "./layout";
import { DatePicker } from "../../components/cart-date-picker";
import { BLACK } from "@/styles/constants";
import { TimePicker } from "../../components/cart-time-picker";
import { BookingDetails } from "../../components/cart-booking-details";

export default function Cart() {
  return (
    <CartLayout>
      <Box bgcolor={BLACK}>
        <Container
          maxWidth="lg"
          sx={{
            [theme.breakpoints.up("md")]: {
              padding: "0 100px",
            },
            [theme.breakpoints.down("md")]: {
              padding: "0 70px",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "0 20px",
            },
          }}
        >
          <DatePicker />
          <TimePicker />
          <BookingDetails />
        </Container>
      </Box>
    </CartLayout>
  );
}
