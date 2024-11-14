import React from "react";

import { Box, Typography } from "@mui/material";

import { opensans, raleway } from "../../src/app/layout";

export const WorkingHours = () => {
  return (
    <Box>
      <Typography
        fontFamily={opensans.style.fontFamily}
        fontSize="18px"
        textAlign="center"
        mb="5px"
      >
        Working hours
      </Typography>
      <Typography
        fontFamily={raleway.style.fontFamily}
        textAlign="center"
        lineHeight="2"
      >
        Monday - Friday: 8am - 6pm <br />
        Saturday: 9am - 3pm
      </Typography>
    </Box>
  );
};
