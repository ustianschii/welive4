import React from "react";

import { GrayCardsBox } from "../../../components/shared/gray-cards";
import {
  grayCardsDataOutdoorTV,
  grayCardsDataFrameTV,
} from "../../../components/shared/gray-cards/data";
import { BlackCardsBox } from "../../../components/outdoor-tv-brands/index";
import { ContentSeparator } from "../../../components/shared/content-separator";
import { CustomAccordion } from "../../../components/shared/accordion";
import {
  outdoorFirstFaq,
  outdoorSecondFaq,
} from "../../../components/shared/accordion/data";
import {
  blackCardsOutdoorTvData,
  blackCardsOutdoorTvSecondData,
} from "../../../components/shared/black-cards/data";
import { BlackCardsBoxShared } from "../../../components/shared/black-cards";
import { TvSizes } from "../../../components/tv-sizes";
import { Box } from "@mui/material";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { GreenDivider } from "../../../components/shared/green-divider";
import { HeaderSubtitle } from "../../../components/shared/header-subtitle";
import { CustomButton } from "../../../components/shared/header-button";
import { Meta } from "../../../components/meta";

export default function Outdoor() {
  return (
    <>
      <Meta
        title="Outdoor TV"
        description=" Outdoor TV Mounting"
        keywords={[
          "outdoor entertainment",
          "outdoor tv",
          "outdoor speakers",
          "audio video calibration",
          "weather proof tv",
          "smart tv",
          "the terrace",
          "furrion",
          "sunbrite tv",
          "seura",
          "frame tv",
          "tv setup",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>PREMIUM OUTDOOR</Highlighted>
              TV MOUNTING
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/outdoor-tv/header-bg.png')`}
        tabletbackground={`url('/outdoor-tv/tablet/header-bg.png')`}
        desktopbackground={`url('/outdoor-tv/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="AVAILABLE IN NEW JERSEY, PENNSILVANIA & DELAWARE" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataOutdoorTV}
          imgheight={400}
          imgwidth={388}
        />
      </Box>
      <BlackCardsBox />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/desktop/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={outdoorFirstFaq} />
      <ContentSeparator
        bg="/outdoor-tv/cs-second.png"
        tabletbg="/outdoor-tv/desktop/cs-second.png"
        titlehighlightedstart="FRAME TV"
        titleend="INSTALLATION"
        containerpadding="30px 0px"
        description="EFORTLESS LUXURY FOR YOUR HOME ENTERTAINMENT 100% RISK-FREE ASSURANCE"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataFrameTV}
          imgheight={400}
          imgwidth={388}
        />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="Why Should"
        titlehighlightedend="You Need A Frame TV Mount"
        titleend="?"
        data={blackCardsOutdoorTvData}
      />
      <TvSizes />
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="What's Inside Our"
        titlehighlightedend="Frame TV Installation"
        titleend="Package?"
        data={blackCardsOutdoorTvSecondData}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/desktop/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={outdoorSecondFaq} />
    </>
  );
}