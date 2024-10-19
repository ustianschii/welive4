import React from "react";

import NetworkLayout from "./layout";

import { GrayCardsBox } from "../../components/shared/gray-cards";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";

import { blackCardsData } from "../../components/shared/black-cards/data";
import { grayCardsData } from "../../components/shared/gray-cards/data";

export default function Network() {
  return (
    <NetworkLayout>
      <GrayCardsBox data={grayCardsData} imgheight={260} imgwidth={388} />
      <BlackCardsBoxShared
        data={blackCardsData}
        titlestart="OUR"
        titlehighlightedend="SOLUTIONS"
      />
    </NetworkLayout>
  );
}
