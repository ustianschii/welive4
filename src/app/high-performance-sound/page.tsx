import Image from "next/image";
import { Box } from "@mui/material";

import { SoundSystemDemo } from "@/components/sound-systems-demo";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { GCMusicStreaming } from "@/components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { BCHighPerformanceAudio } from "@/components/shared/black-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";

export default function HighPerformanceSound() {
  return (
    <>
      <Meta
        title="High-Performance Surround Sound System Installation"
        description="Experience immersive surround sound with 5.1 or 7.1 systems, high-end music streaming, wire concealment, and crystal-clear audio for every space."
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
        background={{
          background: `url('/high-performance-sound/header-bg.png')`,
          tabletBackground: `url('/high-performance-sound/tablet/header-bg.png')`,
          desktopBackground: `url('/high-performance-sound/desktop/header-bg.png')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                <Highlighted>HIGH PERFORMANCE SOUND</Highlighted> SYSTEM
                INSTALLATION
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: [
            "FEEL EVERY NOTE, EVERY RUMBLE WITH WE LIVE 4 HIGH-FIDELITY SURROUNDSOUND SYSTEM",
          ],
          button: <CustomButton text="GET A FREE QUOTE!" />,
          divider: true,
        }}
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
