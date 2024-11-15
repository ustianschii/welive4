import React from "react";
import Image from "next/image";

import { SoundSystemDemo } from "../../../components/sound-systems-demo";
import { GrayCardsBox } from "../../../components/shared/gray-cards";
import { GCMusicStreaming } from "../../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../../components/shared/black-cards";
import { BCHighPerformanceAudio } from "../../../components/shared/black-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { HeaderSubtitle } from "../../../components/shared/header-subtitle";
import { CustomButton } from "../../../components/shared/header-button";
import { GreenDivider } from "../../../components/shared/green-divider";

import { Box } from "@mui/material";
import { Meta } from "../../../components/meta";

export default function HighPerformanceSound() {
  return (
    <>
      <Meta
        title="High Performance Sound System"
        description="Feel every note, every rumble"
        keywords={[
          "high performance sound system",
          "5.1",
          "5.2",
          "7.1",
          "7.2",
          "subwoofer",
          "speakers",
          "high-end",
          "streaming",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>HIGH PERFORMANCE SOUND</Highlighted>
              SYSTEM INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/high-performance-sound/header-bg.png')`}
        tabletbackground={`url('/high-performance-sound/tablet/header-bg.png')`}
        desktopbackground={`url('/high-performance-sound/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="FEEL EVERY NOTE, EVERY RUMBLE WITH WE LIVE 4 HIGH-FIDELITY SURROUNDSOUND SYSTEM" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      <SoundSystemDemo />
      <Box
        sx={{
          backgroundColor: MAIN_SERVICES_BACKGROUND,
          display: "flex",
          justifyContent: "center",
          pt: "20px",
        }}
      >
        <Image
          alt="tidal-icon"
          src="high-performance-sound/tidal.svg"
          width={200}
          height={100}
        />
      </Box>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCMusicStreaming} imgheight={400} imgwidth={388} />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={BCHighPerformanceAudio}
      />
    </>
  );
}
