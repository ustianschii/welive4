import React, { useState } from "react";

import { Box, Divider, List, MenuItem, Typography } from "@mui/material";

import { services } from "./services";
import {
  ServicesBox,
  ListItem,
  FieldContainer,
  Label,
  TextField,
  Button,
} from "./styles";
import { GREEN_DARK, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const ChoosedServicesList = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  const options = ["Employee1", "Employee2", "Employee3"];

  return (
    <ServicesBox>
      <List>
        {services.map((service, index) => (
          <>
            <ListItem key={index} disableGutters>
              {service.name}
            </ListItem>
            <Divider
              style={{
                background: GREEN_DARK,
                height: "2px",
                marginBottom: "7px",
              }}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography
                color={WHITE}
                fontFamily={opensans.style.fontFamily}
                fontSize="22px"
              >
                {service.duration}
              </Typography>
              <Typography
                color={WHITE}
                fontFamily={opensans.style.fontFamily}
                fontSize="22px"
              >
                {service.price}
              </Typography>
            </Box>
          </>
        ))}
      </List>
      <Box mt="30px">
        <FieldContainer>
          <Label>STAFF</Label>
          <TextField
            variant="outlined"
            fullWidth
            select
            value={selectedValue}
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </FieldContainer>
      </Box>
      <Box display="flex" justifyContent="space-between" m="30px 0">
        <Button>&#10229; BACK</Button>
        <Button> NEXT &#10230;</Button>
      </Box>
    </ServicesBox>
  );
};
