import React from "react";

import { Separator } from "../../components/shared/gray-separator";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  GCHomeAudioFirst,
  GCHomeAudioSecond,
} from "../../components/shared/gray-cards/data";
import HomeAudioLayout from "./layout";
import { Button } from "../../components/shared/gray-cards/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { BCHomeAudio } from "../../components/shared/black-cards/data";
import { ContentSeparator } from "../../components/shared/content-separator";
import { CustomAccordion } from "../../components/shared/accordion";
import { homeAudioFaq } from "../../components/shared/accordion/data";

export default function HomeTheater() {
  return (
    <HomeAudioLayout>
      <Separator />
      <GrayCardsBox data={GCHomeAudioFirst} imgheight={400} imgwidth={388} />
      <GrayCardsBox
        data={GCHomeAudioSecond}
        imgheight={400}
        imgwidth={388}
        button={
          <Button>
            MORE ABOUT<Highlighted>LOXONE</Highlighted> &#10230;
          </Button>
        }
      />
      <BlackCardsBoxShared
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={BCHomeAudio}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={homeAudioFaq} />
    </HomeAudioLayout>
  );
}
