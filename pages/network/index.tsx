import React from "react";

import { Box } from "@mui/material";

import NetworkLayout from "./layout";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { blackCardsData } from "../../components/shared/black-cards/data";
import { grayCardsData } from "../../components/shared/gray-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export default function Network() {
  return (
    <NetworkLayout>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={grayCardsData} imgheight={260} imgwidth={388} />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="24%"
        data={blackCardsData}
        titlestart="OUR"
        titlehighlightedend="SOLUTIONS"
      />
    </NetworkLayout>
  );
}
