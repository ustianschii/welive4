import React from "react";

import AudioVisualSystemsLayout from "./layout";
import { AvSolutions } from "../../components/av-solutions";
import { ContentSeparator } from "../../components/shared/content-separator";
import { Separator } from "../../components/shared/gray-separator";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  GCAudioVisualSystems,
  grayCardsAudioVisualSystemsLatest,
} from "../../components/shared/gray-cards/data";
import { Button } from "../../components/shared/gray-cards/styles";
import { ROUTES } from "../../utils/routes-constants";

export default function AudioVisualSystems() {
  return (
    <AudioVisualSystemsLayout>
      <AvSolutions />
      <ContentSeparator
        bg="/audio-visual-systems/cs-room.png"
        tabletbg="/audio-visual-systems/cs-room.png"
        titlehighlightedstart="HOME ENTERTAINMENT"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <Separator />
      {GCAudioVisualSystems.map((item, index) => {
        return (
          <GrayCardsBox
            key={index}
            data={item}
            imgheight={400}
            imgwidth={388}
            button={<Button href={item[0].link}>LEARN MORE &#10230;</Button>}
          />
        );
      })}
      <ContentSeparator
        bg="/audio-visual-systems/cs-office.png"
        tabletbg="/audio-visual-systems/cs-office.png"
        titlehighlightedstart="COMMERCIAL AV"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <GrayCardsBox
        data={grayCardsAudioVisualSystemsLatest}
        button={
          <Button href={ROUTES.CONSULTATION}>GET A FREE QUOTE &#10230;</Button>
        }
      />
      <Separator />
    </AudioVisualSystemsLayout>
  );
}
