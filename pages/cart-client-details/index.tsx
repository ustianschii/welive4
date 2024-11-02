import React from "react";

import { Box, Typography } from "@mui/material";

import CartLayout from "./layout";
import { BOLD, SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";
import { ClientDetailsForm } from "../../components/client-details-form";
import { SummaryBookingDetails } from "../../components/cart-summary-booking-details";

export default function Cart() {
  return (
    <CartLayout>
      <Box bgcolor={SEPARATOR_BACKGROUND} p="0 10px">
        <Typography
          fontFamily={raleway.style.fontFamily}
          fontWeight={BOLD}
          fontSize="22px"
          color={WHITE}
        >
          Tell us a bit about yourself
        </Typography>
        <ClientDetailsForm />
        <SummaryBookingDetails />
      </Box>
    </CartLayout>
  );
}
