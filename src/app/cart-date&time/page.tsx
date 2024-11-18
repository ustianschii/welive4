import React from "react";

import { Box, Typography } from "@mui/material";

import { DatePicker } from "../../../components/cart-date-picker";
import { TimePicker } from "../../../components/cart-time-picker";
import { BookingDetails } from "../../../components/cart-booking-details";
import { BLACK } from "@/styles/constants";

import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";

import { opensans } from "../layout";
import { DateTimePickerContainer } from "../../../components/cart-date-picker/styles";
import { Meta } from "../../../components/meta";

export default function Cart() {
  return (
    <>
      <Meta title="Select date and time" />
      <Header
        mobileheight="100px"
        tabletheight="100px"
        desktopheight="100px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={
          <Box
            display="flex"
            m="30px 0"
            justifyContent="space-between"
            p="0 20px"
          >
            <Typography fontFamily={opensans.style.fontFamily} fontSize="14px">
              SELECT DATE AND TIME
            </Typography>
            <Typography fontFamily={opensans.style.fontFamily} fontSize="14px">
              STANDART TIME (GMT +0)
            </Typography>
          </Box>
        }
      />
      <Box bgcolor={BLACK}>
        <DateTimePickerContainer maxWidth="lg">
          <DatePicker />
          <TimePicker />
          <BookingDetails />
        </DateTimePickerContainer>
      </Box>
    </>
  );
}
