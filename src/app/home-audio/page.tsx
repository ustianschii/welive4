import React from "react";

import { GrayCardsBox } from "../../../components/shared/gray-cards";
import {
  GCHomeAudioFirst,
  GCHomeAudioSecond,
} from "../../../components/shared/gray-cards/data";
import { Button } from "../../../components/shared/gray-cards/styles";
import { BlackCardsBoxShared } from "../../../components/shared/black-cards";
import { BCHomeAudio } from "../../../components/shared/black-cards/data";
import { ContentSeparator } from "../../../components/shared/content-separator";
import { CustomAccordion } from "../../../components/shared/accordion";
import { homeAudioFaq } from "../../../components/shared/accordion/data";
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

export default function HomeTheater() {
  return (
    <>
      <Meta
        title="Home Audio"
        description="Your Favorite Songs In Every Corner Of Your Home"
        keywords={[
          "home audio",
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
              WHOLE
              <Highlighted>HOME AUDIO</Highlighted>
              SYSTEMS
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/home-audio/header-bg.png')`}
        tabletbackground={`url('/home-audio/tablet/header-bg.png')`}
        desktopbackground={`url('/home-audio/desktop/header-bg.png')`}
        subtitle={
          <HeaderSubtitle first="STREAMING YOUR FAVORITE SONGS IN EVERY CORNER OF YOUR HOME!" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
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
        containerpadding="20px 0 0 0"
      />
      <CustomAccordion data={homeAudioFaq} />
    </>
  );
}
