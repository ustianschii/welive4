"use client";

import React from "react";

// import AutomationLayout from "./layout";
import { ActionBanner } from "../../../components/shared/action-banner";
import { ForResidential } from "../../../components/for-residential";
import { ForCommercial } from "../../../components/for-commercial";
import { Video } from "../../../components/video";

import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Header } from "../../../components/shared/header";
import { Footer } from "../../../components/shared/footer";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { GreenDivider } from "../../../components/shared/green-divider";
import { HeaderSubtitle } from "../../../components/shared/header-subtitle";

export default function LoxoneAutomation() {
  const theme = useTheme();

  return (
    <>
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              Loxone Automation:
              <Highlighted>The New Future Of Smart Automation</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('loxone-automation/header-bg.png')`}
        tabletbackground={`url('loxone-automation/tablet/header-bg.png')`}
        desktopbackground={`url('loxone-automation/desktop/header-bg.png')`}
        mobileheight="800px"
        tabletheight="800px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Loxone, founded in 2009 and headquartered in Austria, is a prominent manufacturer of smart home automation solutions. Their commitment to innovation and excellence has positioned them as industry leaders in building smart home automation. "
            second="According to Keinberger, a key figure within the company, Loxone's vision revolves around making buildings not just smart, but intelligently responsive to occupants' needs. Because of this, Loxone is successful with over 200,000 projects in 100+ countries."
            third="Entering North America, Loxone US is believed to be one of the top market leaders delivering the finest smart home automation experience for customers."
          />
        }
      />
      <Box
        sx={{
          background: "linear-gradient(to right, #787878 50%, #373840 50%)",
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            display: "flex",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <ForResidential />
          <ForCommercial />
        </Container>
      </Box>
      <Video />
      <ActionBanner />
      <Footer divider={<GreenDivider />} />
    </>
  );
}
