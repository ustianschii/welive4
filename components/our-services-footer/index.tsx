import React from "react";
import { Typography } from "@mui/material";
import { Links, Title, Wrapper } from "./styles";

const services = [
  "Network",
  "Home theater & entertainment",
  "Smart home automation",
  "Smart EV charger",
  "Solar installation",
  "TV Mounting",
];

const OurServices = () => {
  return (
    <Wrapper>
      <Title>Our services</Title>
      <Links>
        {services.map((service, index) => (
          <Typography key={index}>{service}</Typography>
        ))}
      </Links>
    </Wrapper>
  );
};

export default OurServices;
