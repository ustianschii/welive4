"use client";

import React, { useState } from "react";

import { FormGroup, MenuItem } from "@mui/material";

import {
  Checkbox,
  Container,
  Description,
  FieldContainer,
  FormContainer,
  Label,
  Pair,
  TextField,
  FormControlLabel,
  Button,
  Wrapper,
} from "./styles";
import { GRAY } from "@/styles/constants";

export const SystemDesignForm = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  const options = ["Mr", "Mrs", "Ms"];
  const labels = [
    "Home automation",
    "Commercial automation",
    "Network System",
    "Entertainment System",
    "EV Charging & Solar Energy",
    "AV Integration",
  ];

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <FormContainer>
          <Description>
            Our expert team is here to assist you every step of the way. Whether
            you&apos;re planning a new project or seeking advice, we&apos;re
            ready to help.
          </Description>
          <Description>
            Please provide as much detail about your project to our systems
            design group below to get started.
          </Description>
          <Pair>
            <FieldContainer>
              <Label>Full name*</Label>
              <TextField variant="standard" fullWidth />
            </FieldContainer>
            <FieldContainer>
              <Label>Mr/Mrs/Ms*</Label>
              <TextField
                variant="standard"
                select
                value={selectedValue}
                onChange={handleChange}
                style={{ width: "150px" }}
                fullWidth
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FieldContainer>
          </Pair>
          <FieldContainer>
            <Label>E-mail*</Label>
            <TextField variant="standard" fullWidth />
          </FieldContainer>
          <FieldContainer>
            <Label>Phone*</Label>
            <TextField variant="standard" fullWidth />
          </FieldContainer>
          <FieldContainer>
            <Label>City*</Label>
            <TextField variant="standard" fullWidth />
          </FieldContainer>
          <Pair>
            <FieldContainer>
              <Label>State*</Label>
              <TextField variant="standard" />
            </FieldContainer>
            <FieldContainer>
              <Label>ZIP Code*</Label>
              <TextField variant="standard" style={{ width: "150px" }} />
            </FieldContainer>
          </Pair>
          <Label sx={{ mt: "20px" }}>
            Which service(s) are you interested in?*
          </Label>
          <FormGroup sx={{ mt: "20px" }}>
            {labels.map((label) => (
              <FormControlLabel
                key={label}
                control={<Checkbox />}
                label={label}
              />
            ))}
          </FormGroup>
          <Label m="30px 0 30px 0">Detailed description*</Label>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Add some details"
          />
          <Description sx={{ textAlign: "start", mt: "30px", color: GRAY }}>
            Please provide detailed examples and specific information about your
            requirements to help us better understand your needs for the system
            design. (desired features or functionalities; layout and size of the
            space; number of rooms/floors/any unique architectural features;
            preferences for technology brands or products; budget constraints;
            etc.)
          </Description>
          <Button fullWidth>SUBMIT</Button>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};
