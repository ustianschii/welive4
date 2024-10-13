import React from "react";

import { Box, Typography } from "@mui/material";

import { Button, Container, TextField } from "./styles";
import { WHITE } from "@/styles/constants";

export const ChecklistShortFields = () => {
  return (
    <Container>
      <Box
        width="90%"
        height="250px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mb="50px"
      >
        <Box>
          <Typography color={WHITE} mb="5px">
            YOUR FULL NAME
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            required
            placeholder="John Smith"
            size="small"
            fullWidth
          />
        </Box>
        <Box>
          <Typography color={WHITE} mb="5px">
            YOUR BEST EMAIL
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            required
            placeholder="your@email.com"
            size="small"
            fullWidth
          />
        </Box>
        <Box>
          <Typography color={WHITE} mb="5px">
            YOUR PHONE NUMBER
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            required
            placeholder="+1 (404) 329 4141"
            size="small"
            fullWidth
          />
        </Box>
      </Box>
      <Button variant="outlined" size="small">
        CONTINUE TO SMART CHECK LIST
      </Button>
    </Container>
  );
};
