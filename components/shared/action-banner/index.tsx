import React from "react";

import { Box } from "@mui/material";

import { Button, Container, Title } from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { GreenDivider } from "../green-divider";
import { ROUTES } from "../../../utils/routes-constants";

export const ActionBanner = () => {
  return (
    <>
      <GreenDivider />
      <Container>
        <Title>
          DISCOVER HOW<Highlighted>LOXONE</Highlighted> <br /> TRANSFORM YOUR
          <br />
          SPACE!
        </Title>
        <Box mt="50px">
          <Box display="flex" gap="5px" mb="5px">
            <Button href={ROUTES.CHECKLIST_SHORT}>SMART CHECK LIST</Button>
            <Button href={ROUTES.CONSULTATION}>CONTACT LOXONE</Button>
          </Box>
          <Button href={ROUTES.CONSULTATION}>ON-SITE CONSULTATION</Button>
        </Box>
      </Container>
    </>
  );
};
