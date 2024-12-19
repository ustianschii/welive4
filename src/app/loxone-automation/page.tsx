"use client";

import React from "react";

import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ActionBanner } from "@/components/shared/action-banner";
import { ForResidential } from "@/components/for-residential";
import { ForCommercial } from "@/components/for-commercial";
import { Video } from "@/components/video";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { Meta } from "@/components/meta";

export default function LoxoneAutomation() {
  const theme = useTheme();

  return (
    <>
      <Meta
        title="Unbeatable CRESTRON LUTRON or CONTROL4 alternative"
        description="Loxone Automation integrates lighting, heating, security, and energy management, offering convenience, efficiency, and sustainability for smart homes and buildings."
        keywords={[
          "loxone",
          "smart home",
          "automation",
          "access control",
          "lighting control",
          "climate control",
          "security",
          "energy management",
          "ambient assisted living",
          "conference board room",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              Loxone Automation:
              <Highlighted>The Future-proof Of Smart Automation</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('loxone-automation/header-bg.png')`}
        tabletbackground={`url('loxone-automation/tablet/header-bg.png')`}
        desktopbackground={`url('loxone-automation/desktop/header-bg.png')`}
        mobileheight="750px"
        tabletheight="750px"
        desktopheight="750px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Imagine walking into your home, office, warehouse, restaurant or whatever place that brings you good memories that intuitively knows your needs, enhancing comfort and convenience at every turn."
            second="With LOXONE’s cutting-edge smart automation solutions, that vision becomes a reality. Founded in Austria in 2009 and backed by its successful implementation of over 200,000 projects globally, WeLive4 as part of LOXONE committed to transforming how people interact with their spaces. Our technology adapts to your lifestyle, ensuring your environment is not just smart, but intelligently responsive. LOXONE makes a mark in North America since 2019, Loxone US is swiftly becoming known as an industry leader in delivering exceptional smart automation experiences. Picture your properties—whether residential or commercial—being equipped with state-of-the-art automation that elevates the living and working environment, improves energy efficiency, and enhances security."
            third="We would love the opportunity to discuss how LOXONE can revolutionize your properties and provide a scenario tailored to your specific needs. Learn more and schedule a call with us today. Looking forward to connecting!"
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
    </>
  );
}
