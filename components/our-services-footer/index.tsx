import { Typography } from "@mui/material";
import { Links, Title, Wrapper } from "./styles";
import React from "react";

const OurServices = () => {
  return (
    <Wrapper>
      <Title>Our services</Title>
      <Links>
        <Typography>Network</Typography>
        <Typography>Home theater & entertainment</Typography>
        <Typography>Smart home automation</Typography>
        <Typography>Smart EV charger</Typography>
        <Typography>Solar installation</Typography>
        <Typography>TV Mounting</Typography>
      </Links>
    </Wrapper>
  );
};

export default OurServices;
