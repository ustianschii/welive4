import React from "react";

import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  grayCardsDataEnergyManagement,
  grayCardsDataEnergyManagementFourth,
  grayCardsDataEnergyManagementSecond,
  grayCardsDataEnergyManagementThird,
} from "../../components/shared/gray-cards/data";

import EnergyManagementLayout from "./layout";
import { ContentSeparator } from "../../components/shared/content-separator";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import {
  blackCardsEnergyManagementData,
  blackCardsEnergyManagementSecondData,
} from "../../components/shared/black-cards/data";
import { TransparentCard } from "../../components/transparent-card";
import { transparentCardsContent } from "../../components/transparent-card/data";
import { Button } from "../../components/shared/gray-cards/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { Box } from "@mui/material";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export default function EnergyManagement() {
  return (
    <EnergyManagementLayout>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataEnergyManagement}
          imgheight={400}
          imgwidth={388}
        />
      </Box>
      <ContentSeparator
        bg="/energy-management/auto-charging-port.png"
        tabletbg="/energy-management/desktop/cs-home-ev.png"
        titlehighlightedstart="HOME EV CHARGING"
        titleend="INSTALLATION"
        containerpadding="30px 0"
        description="POWER UP YOUR RIDE WHILE GOING GREEN WITH WE LIVE 4 EV CHARGING!"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataEnergyManagementSecond}
          imgheight={400}
          imgwidth={388}
        />
      </Box>

      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={blackCardsEnergyManagementData}
      />
      <ContentSeparator
        bg="energy-management/cs-roof.png"
        tabletbg="energy-management/desktop/cs-solar-power.png"
        titlehighlightedstart="SOLAR POWER SYSTEMS"
        titleend="INSTALLATION"
        description="STABLE ENERGY COSTS MONTH AFTER MONTH!"
        containerpadding="60px 0"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataEnergyManagementThird}
          imgheight={230}
          imgwidth={390}
        />
      </Box>

      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={blackCardsEnergyManagementSecondData}
      />
      <TransparentCard
        titlehighlightedstart="Home"
        titleend="Energy Management System"
        data={transparentCardsContent}
        index={0}
        bg="/energy-management/home-card-bg.png"
      />
      <TransparentCard
        titlehighlightedstart="Building"
        titleend="Energy Management System"
        data={transparentCardsContent}
        index={1}
        bg="/energy-management/building-card-bg.png"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsDataEnergyManagementFourth}
          imgheight={400}
          imgwidth={388}
          button={
            <Button>
              MORE ABOUT <Highlighted>LOXONE</Highlighted> &#10230;
            </Button>
          }
        />
      </Box>
    </EnergyManagementLayout>
  );
}
