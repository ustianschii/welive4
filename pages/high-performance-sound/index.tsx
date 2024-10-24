import React from "react";

import HighPerformanceSoundLayout from "./layout";
import { SoundSystemDemo } from "../../components/sound-systems-demo";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { GCMusicStreaming } from "../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { BCHighPerformanceAudio } from "../../components/shared/black-cards/data";

export default function HighPerformanceSound() {
  return (
    <HighPerformanceSoundLayout>
      <SoundSystemDemo />
      <GrayCardsBox data={GCMusicStreaming} imgheight={400} imgwidth={388} />
      <BlackCardsBoxShared
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={BCHighPerformanceAudio}
      />
    </HighPerformanceSoundLayout>
  );
}
