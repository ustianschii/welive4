import React from "react";

import { Box } from "@mui/material";

import { Separator } from "@/components/shared/gray-separator";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  GCGameMediaBottom,
  GCGameMediaTop,
} from "@/components/shared/gray-cards/data";
import { Title } from "@/components/shared/content-separator/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";

import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { CustomButton } from "@/components/shared/header-button";
import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";

export default function HomeTheater() {
  return (
    <>
      <Meta
        title="Customized Game & Media Room Installation Services"
        description="Create your dream gaming and media space with personalized designs, AV setup, RGBW lighting, and smart control for an immersive experience."
        keywords={["media room", "gaming room", "rgbw"]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              CUSTOMIZED
              <Highlighted>GAME & MEDIA</Highlighted>
              ROOM INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/game-media/header-bg.png')`}
        tabletbackground={`url('/game-media/tablet/header-bg.png')`}
        desktopbackground={`url('/game-media/desktop/header-bg.png')`}
        subtitle={
          <HeaderSubtitle first="CREATE YOUR PERFECT GAMING AND MEDIA ZONE WITH OUR CUSTOM-DESIGNED SYSTEMS" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaTop} imgheight={400} imgwidth={388} />
      </Box>
      <Separator height="100px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaBottom} imgheight={400} imgwidth={388} />
      </Box>
    </>
  );
}
