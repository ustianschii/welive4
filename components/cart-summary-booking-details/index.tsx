import React from "react";

import { opensans, raleway } from "../../src/app/layout";
import { SEMI_BOLD, WHITE } from "@/styles/constants";

import { Box, Typography } from "@mui/material";
import { Highlighted } from "../hero-title/styles";
import { selectedServices } from "./services";
import { Button } from "./styles";
import { GreenDivider } from "../shared/green-divider";
import { ROUTES } from "../../src/app/utils/routes-constants";

export const SummaryBookingDetails = () => {
  return (
    <Box>
      <Box>
        <Typography
          fontFamily={opensans.style.fontFamily}
          fontSize="20px"
          color={WHITE}
        >
          <Highlighted mLeft="0px">BOOKING</Highlighted>
          DETAILS
        </Typography>
        <Typography
          fontFamily={raleway.style.fontFamily}
          fontSize="15px"
          color={WHITE}
          mt="20px"
        >
          November 02, 2024 at 11:00 <br />
          WE LIVE 4 Bethlehem
        </Typography>
        <GreenDivider />
      </Box>
      <Box>
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
        <GreenDivider />
      </Box>
      <Box>
        <Typography
          fontFamily={opensans.style.fontFamily}
          fontSize="20px"
          color={WHITE}
          mt="30px"
        >
          <Highlighted mLeft="0px">PAYMENT</Highlighted>
          DETAILS
        </Typography>
        <Typography
          fontFamily={opensans.style.fontFamily}
          fontSize="16px"
          color={WHITE}
          mt="10px"
        >
          STARTING AT $498
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        m="30px 0 0 0"
        pb="30px"
      >
        <Button href={ROUTES.CART_DATE_TIME}>&#10229; BACK</Button>
        <Button>BOOK NOW</Button>
      </Box>
    </Box>
  );
};
