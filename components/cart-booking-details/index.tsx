import React from "react";

import { opensans } from "../../src/app/layout";
import { SEMI_BOLD, WHITE } from "@/styles/constants";

import { Box, Typography } from "@mui/material";
import { Highlighted } from "../hero-title/styles";
import { selectedServices } from "./services";
import { Button } from "./styles";
import { ROUTES } from "../../utils/routes-constants";

export const BookingDetails = () => {
  return (
    <Box>
      <Typography
        fontFamily={opensans.style.fontFamily}
        fontSize="20px"
        color={WHITE}
      >
        <Highlighted mRight="4px" mLeft="0px">
          BOOKING
        </Highlighted>
        DETAILS
      </Typography>
      {selectedServices.map((service, index) => (
        <Box key={index} p="10px 0" color={WHITE}>
          <Typography
            fontFamily={opensans.style.fontFamily}
            fontWeight={SEMI_BOLD}
          >
            {service.name}
          </Typography>
          <Typography>{service.duration}</Typography>
        </Box>
      ))}
      <Box
        display="flex"
        justifyContent="space-between"
        m="30px 0 0 0"
        pb="30px"
      >
        <Button href={ROUTES.CART_CHOOSED_SERVICES}>&#10229; BACK</Button>
        <Button href={ROUTES.CART_CLIENT_DETAILS}> NEXT &#10230;</Button>
      </Box>
    </Box>
  );
};
