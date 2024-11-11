import React from "react";

import { Box } from "@mui/material";

import { Button, Container, FieldsBox, Label, TextField } from "./styles";
import { WHITE } from "@/styles/constants";

import { ROUTES } from "../../utils/routes-constants";

export const ChecklistShortFields = () => {
  return (
    <Container>
      <FieldsBox>
        <Box>
          <Label color={WHITE} mb="5px">
            YOUR FULL NAME*
          </Label>
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
          <Label color={WHITE} mb="5px">
            YOUR BEST EMAIL*
          </Label>
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
          <Label color={WHITE} mb="5px">
            YOUR PHONE NUMBER*
          </Label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            required
            placeholder="+1 (404) 329 4141"
            size="small"
            fullWidth
          />
        </Box>
      </FieldsBox>
      <Button variant="outlined" size="small" href={ROUTES.CHECKLIST_LONG}>
        CONTINUE TO SMART CHECK LIST
      </Button>
    </Container>
  );
};
