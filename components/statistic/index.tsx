import React from "react";
import { Button, Container, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Box } from "@mui/material";
import { GRAY } from "@/styles/constants";

export const Statistic = () => {
  return (
    <>
      <Container>
        <Title>
          DON&apos;T BECOME A <br />
          <Highlighted>STATISTIC</Highlighted>
        </Title>
        <Description>
          Smart technology has many cool designs and solutions to make your life
          more comfortable and bring additional passive income to your household
          - not to mention more fun! It is possible to live better without
          breaking the bank. Potential smart technology advantages include
          whole-house audio, home entry control, turning lights on and off,
          thermostats, power sockets, doorbells, vacuum cleaners, smart energy
          distribution, and other geeky things you could do with one click on
          your remote, smartphone or control panel.
        </Description>
        <Button>GET A FREE QUOTE!</Button>
      </Container>
      <Box width="100%" height="35px" sx={{ backgroundColor: GRAY }} />
    </>
  );
};
