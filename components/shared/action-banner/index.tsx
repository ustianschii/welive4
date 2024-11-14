"use client";

import React from "react";

import { Box } from "@mui/material";

import { Button, ButtonsWrapper, Container, Title } from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { GreenDivider } from "../green-divider";
import { ROUTES } from "../../../utils/routes-constants";

export const ActionBanner = () => {
  return (
    <>
      <GreenDivider />
      <Box
        sx={{
          backgroundImage: `url(${"/action-banner/action-banner-bg.png"})`,
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Title>
            DISCOVER HOW<Highlighted>LOXONE</Highlighted>TRANSFORM YOUR SPACE!
          </Title>
          <ButtonsWrapper>
            <Box display="flex" gap="10px" mb="10px">
              <Button href={ROUTES.CHECKLIST_SHORT}>SMART CHECK LIST</Button>
              <Button href={ROUTES.CONSULTATION}>CONTACT LOXONE</Button>
            </Box>
            <Button href={ROUTES.CONSULTATION}>ON-SITE CONSULTATION</Button>
          </ButtonsWrapper>
        </Container>
      </Box>
    </>
  );
};
