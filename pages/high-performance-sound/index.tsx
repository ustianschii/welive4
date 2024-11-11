import React from "react";
import Image from "next/image";

import HighPerformanceSoundLayout from "./layout";
import { SoundSystemDemo } from "../../components/sound-systems-demo";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { GCMusicStreaming } from "../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { BCHighPerformanceAudio } from "../../components/shared/black-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

import { Box } from "@mui/material";

export default function HighPerformanceSound() {
  return (
    <HighPerformanceSoundLayout>
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
    </HighPerformanceSoundLayout>
  );
}
