import React from "react";

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
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";
import { Box } from "@mui/material";

export default function HomeTheater() {
  return (
    <HomeAudioLayout>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCHomeAudioFirst} imgheight={400} imgwidth={388} />
      </Box>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
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
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={BCHomeAudio}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/desktop/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={homeAudioFaq} />
    </HomeAudioLayout>
  );
}
