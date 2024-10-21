import React from "react";

import OutdoorLayout from "./layout";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  grayCardsDataOutdoorTV,
  grayCardsDataFrameTV,
} from "../../components/shared/gray-cards/data";
import { BlackCardsBox } from "../../components/outdoor-tv-brands/index";
import { ContentSeparator } from "../../components/shared/content-separator";
import { CustomAccordion } from "../../components/shared/accordion";
import {
  outdoorFirstFaq,
  outdoorSecondFaq,
} from "../../components/shared/accordion/data";
import {
  blackCardsOutdoorTvData,
  blackCardsOutdoorTvSecondData,
} from "../../components/shared/black-cards/data";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { TvSizes } from "../../components/tv-sizes";

export default function Outdoor() {
  return (
    <OutdoorLayout>
      <GrayCardsBox
        data={grayCardsDataOutdoorTV}
        imgheight={400}
        imgwidth={388}
      />
      <BlackCardsBox />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={outdoorFirstFaq} />
      <ContentSeparator
        bg="/outdoor-tv/cs-second.png"
        titlehighlightedstart="FRAME TV"
        titleend="INSTALLATION"
        containerpadding="30px 0px"
        description="EFORTLESS LUXURY FOR YOUR HOME ENTERTAINMENT 100% RISK-FREE ASSURANCE"
      />
      <GrayCardsBox
        data={grayCardsDataFrameTV}
        imgheight={400}
        imgwidth={388}
      />
      <BlackCardsBoxShared
        titlestart="Why Should"
        titlehighlightedend="You Need A Frame TV Mount"
        titleend="?"
        data={blackCardsOutdoorTvData}
      />
      <TvSizes />
      <BlackCardsBoxShared
        titlestart="What's Inside Our"
        titlehighlightedend="Frame TV Installation"
        titleend="Package?"
        data={blackCardsOutdoorTvSecondData}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={outdoorSecondFaq} />
    </OutdoorLayout>
  );
}
