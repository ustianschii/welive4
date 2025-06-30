import { Box } from "@mui/material";

import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  grayCardsDataOutdoorTV,
  grayCardsDataFrameTV,
} from "@/components/shared/gray-cards/data";
import { BlackCardsBox } from "@/components/outdoor-tv-brands/index";
import { ContentSeparator } from "@/components/shared/content-separator";
import { CustomAccordion } from "@/components/shared/accordion";
import {
  outdoorFirstFaq,
  outdoorSecondFaq,
} from "@/components/shared/accordion/data";
import {
  blackCardsOutdoorTvData,
  blackCardsOutdoorTvSecondData,
} from "@/components/shared/black-cards/data";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { TvSizes } from "@/components/tv-sizes";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function OutdoorTv() {
  return (
    <>
      <Meta
        title={metadata.OutdoorTv.title}
        description={metadata.OutdoorTv.description}
        keywords={metadata.OutdoorTv.keywords}
      />
      <Header
        background={{
          background: `url('/outdoor-tv/header-bg.png')`,
          tabletBackground: `url('/outdoor-tv/tablet/header-bg.png')`,
          desktopBackground: `url('/outdoor-tv/desktop/header-bg.png')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                <Highlighted>PREMIUM OUTDOOR</Highlighted> TV MOUNTING
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: ["AVAILABLE IN NEW JERSEY, PENNSYLVANIA & DELAWARE"],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
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
        containerpadding="20px 0 0 0"
      />
      <CustomAccordion data={outdoorFirstFaq} />
      <ContentSeparator
        bg="/outdoor-tv/cs-second.png"
        tabletbg="/outdoor-tv/desktop/cs-second.png"
        titlehighlightedstart="FRAME TV"
        titleend="INSTALLATION"
        description="EFORTLESS LUXURY FOR YOUR HOME ENTERTAINMENT 100% RISK-FREE ASSURANCE"
        containerpadding="20px 0 0 0"
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
        containerpadding="20px 0 0 0"
      />
      <CustomAccordion data={outdoorSecondFaq} />
    </>
  );
}
