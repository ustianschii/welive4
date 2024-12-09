import React from "react";

import { Box, Typography } from "@mui/material";

import { BLACK, BOLD, WHITE } from "@/src/styles/constants";
import { raleway, opensans } from "@/src/app/layout";
import { ClientDetailsForm } from "@/components/client-details-form";
import { SummaryBookingDetails } from "@/components/cart-summary-booking-details";
import { Header } from "@/components/shared/header";
import { Highlighted } from "@/components/hero-title/styles";
import { Container } from "@/components/cart-summary-booking-details/styles";
import { Meta } from "@/components/meta";

export default function Cart() {
  return (
    <>
      <Meta title="Details" />
      <Header
        mobileheight="100px"
        tabletheight="100px"
        desktopheight="100px"
        backcolor={BLACK}
        title={
          <Box display="flex" m="30px 10px" justifyContent="space-between">
            <Typography fontFamily={opensans.style.fontFamily} fontSize="20px">
              <Highlighted mRight="0px">CLIENT</Highlighted> DETAILS
            </Typography>
          </Box>
        }
      />
      <Box bgcolor={BLACK}>
        <Container maxWidth="lg">
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
    </>
  );
}
