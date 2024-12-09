"use client";

import React, { useState } from "react";

import { Box, Divider, List, Typography, MenuItem } from "@mui/material";

import { services } from "./services";
import {
  ServicesBox,
  ListItem,
  FieldContainer,
  Label,
  TextField,
  Button,
  Wrapper,
} from "./styles";
import { GREEN, WHITE } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const ChoosedServicesList = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    "WE LIVE 4 BETHLEHEM",
    "WE LIVE 4 CHESTER",
    "WE LIVE 4 PHILADELPHIA",
    "WE LIVE 4 SEA GIRT",
    "WE LIVE 4 SOMERSET",
    "WE LIVE 4 WILMINGTON",
  ];

  return (
    <Wrapper>
      <ServicesBox>
        <List>
          {services.map((service, index) => (
            <Box key={index}>
              <ListItem disableGutters>{service.name}</ListItem>
              <Divider
                style={{
                  background: GREEN,
                  height: "1px",
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
            </Box>
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
          <Button href={ROUTES.GET_SERVICES}>&#10229; BACK</Button>
          <Button href={ROUTES.CART_DATE_TIME}> NEXT &#10230;</Button>
        </Box>
      </ServicesBox>
    </Wrapper>
  );
};
