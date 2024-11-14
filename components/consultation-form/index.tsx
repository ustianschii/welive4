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
} from "../system-design-form/styles";
import { GRAY } from "@/styles/constants";

export const ConsultationForm = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  const options = ["Mr", "Mrs", "Ms"];
  const labels = [
    "Smart automation system",
    "Energy management system",
    "EV charging",
    "Solar energy system",
    "Smart home car integration",
    "Home theater",
    "Whole home audio system",
    "Surround sound system",
    "Ethernet/WiFi support",
    "On-site survey",
    "Cellular Booster",
    "Wiring & Prewiring",
    "Frame TV Mounting",
    "Outdoor TV Mounting",
  ];

  return (
    <Wrapper>
      <Container>
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
          <Pair mt="30px">
            <FieldContainer>
              <Label>Full name*</Label>
              <TextField
                variant="standard"
                sx={{
                  width: "90%",
                }}
              />
            </FieldContainer>
            <FieldContainer>
              <Label>Mr/Mrs/Ms*</Label>
              <TextField
                variant="standard"
                select
                value={selectedValue}
                onChange={handleChange}
                sx={{ width: "180px" }}
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
              <TextField variant="standard" sx={{ width: "90%" }} />
            </FieldContainer>
            <FieldContainer>
              <Label>ZIP Code*</Label>
              <TextField variant="standard" />
            </FieldContainer>
          </Pair>

          <FieldContainer>
            <Label>How can we help you?*</Label>
            <TextField
              variant="standard"
              select
              value={selectedValue}
              onChange={handleChange}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FieldContainer>

          <FieldContainer>
            <Label>
              Are you interested in services for your home or your business?*
            </Label>
            <TextField
              variant="standard"
              select
              value={selectedValue}
              onChange={handleChange}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FieldContainer>

          <FieldContainer>
            <Label>Is your property a new construction or remodeling?*</Label>
            <TextField
              variant="standard"
              select
              value={selectedValue}
              onChange={handleChange}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FieldContainer>

          <Label m="30px 0 30px 0">
            Choose which services are you interested in*
          </Label>
          <FormGroup>
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
