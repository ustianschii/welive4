import React from "react";

import { Box, Container, Typography } from "@mui/material";

import CartLayout from "./layout";
import { BLACK, BOLD, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";
import { ClientDetailsForm } from "../../components/client-details-form";
import { SummaryBookingDetails } from "../../components/cart-summary-booking-details";
import theme from "@/styles/theme";

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
        </Container>
      </Box>
    </CartLayout>
  );
}
