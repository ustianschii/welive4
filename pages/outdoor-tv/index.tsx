import React from "react";

import OutdoorLayout from "./layout";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { grayCardsDataOutdoorTV } from "../../components/shared/gray-cards/data";
import { BlackCardsBox } from "../../components/outdoor-tv-brands/index";

export default function Outdoor() {
  return (
    <OutdoorLayout>
      <GrayCardsBox
        data={grayCardsDataOutdoorTV}
        imgheight={400}
        imgwidth={388}
      />
      <BlackCardsBox />
    </OutdoorLayout>
  );
}
