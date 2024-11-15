import React from "react";

import { Box } from "@mui/material";

import { AvSolutions } from "../../../components/av-solutions";
import { ContentSeparator } from "../../../components/shared/content-separator";
import { GrayCardsBox } from "../../../components/shared/gray-cards";
import {
  GCAudioVisualSystems,
  grayCardsAudioVisualSystemsLatest,
} from "../../../components/shared/gray-cards/data";
import { Button } from "../../../components/shared/gray-cards/styles";
import { ROUTES } from "../utils/routes-constants";
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
import { Meta } from "../../../components/meta";

export default function AudioVisualSystems() {
  return (
    <>
      <Meta
        title="Premium Audio Visual Systems"
        description="Unmatched Audio & Visual Excellence"
        keywords={[
          "audio",
          "video",
          "home audio",
          "4k",
          "5.1",
          "7.1",
          "home entertainment",
          "home theater",
          "gaming",
          "surround system",
          "outdoor entertainment",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              PREMIUM
              <Highlighted>AUDIO VISUAL</Highlighted>
              SYSTEMS INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/audio-visual-systems/header-bg.png')`}
        tabletbackground={`url('/audio-visual-systems/tablet/header-bg.png')`}
        desktopbackground={`url('/audio-visual-systems/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="EXPERIENCE UNMATCHED AUDIO VISUAL EXCELLENCE ACROSS NEW JERSEY, PENNSYLVANIA AND DELAWARE" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      <AvSolutions />
      <ContentSeparator
        bg="/audio-visual-systems/cs-room.png"
        tabletbg="/audio-visual-systems/desktop/cs-room.png"
        titlehighlightedstart="HOME ENTERTAINMENT"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={GCAudioVisualSystems}
          imgheight={400}
          imgwidth={388}
          button={
            <Button href={GCAudioVisualSystems[0].link}>
              LEARN MORE &#10230;
            </Button>
          }
        />
      </Box>

      <ContentSeparator
        bg="/audio-visual-systems/cs-office.png"
        tabletbg="/audio-visual-systems/desktop/cs-office.png"
        titlehighlightedstart="COMMERCIAL AV"
        titleend="SYSTEMS"
        titlepadding="70px 0 0 0"
        containerpadding="30px 0"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsAudioVisualSystemsLatest}
          button={
            <Button href={ROUTES.CONSULTATION}>
              GET A FREE QUOTE &#10230;
            </Button>
          }
        />
      </Box>
    </>
  );
}