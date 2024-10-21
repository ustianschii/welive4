import React from "react";

import AudioVisualSystemsLayout from "./layout";
import { AvSolutions } from "../../components/av-solutions";
import { ContentSeparator } from "../../components/shared/content-separator";
import { Separator } from "../../components/shared/gray-separator";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  grayCardsAudioVisualSystems,
  grayCardsAudioVisualSystemsLatest,
} from "../../components/shared/gray-cards/data";
import { Button } from "../../components/shared/gray-cards/styles";

export default function AudioVisualSystems() {
  return (
    <AudioVisualSystemsLayout>
      <AvSolutions />
      <ContentSeparator
        bg="/audio-visual-systems/cs-room.svg"
        titlehighlightedstart="HOME ENTERTAINMENT"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <Separator />
      <GrayCardsBox
        data={grayCardsAudioVisualSystems}
        imgheight={400}
        imgwidth={388}
        button={<Button>LEARN MORE &#10230;</Button>}
      />
      <ContentSeparator
        bg="/audio-visual-systems/cs-office.svg"
        titlehighlightedstart="COMMERCIAL AV"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <GrayCardsBox
        data={grayCardsAudioVisualSystemsLatest}
        button={<Button>GET A FREE QUOTE &#10230;</Button>}
      />
      <Separator />
    </AudioVisualSystemsLayout>
  );
}
