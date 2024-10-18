import React from "react";

import { Box } from "@mui/material";

import { Button, Container, Title } from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { GreenDivider } from "../green-divider";

export const ActionBanner = () => {
  return (
    <>
      <GreenDivider />
      <Container>
        <Title>
          DISCOVER HOW <Highlighted>LOXONE</Highlighted> <br /> TRANSFORM YOUR{" "}
          <br />
          SPACE!
        </Title>
        <Box mt="50px">
          <Box display="flex" marginBottom="10px">
            <Button sx={{ mr: "5px" }}>SMART CHECK LIST</Button>
            <Button sx={{ ml: "5px" }}>CONTACT LOXONE</Button>
          </Box>
          <Button>ON-SITE CONSULTATION</Button>
        </Box>
      </Container>
    </>
  );
};
