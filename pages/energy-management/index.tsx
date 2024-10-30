import React from "react";

import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  grayCardsDataEnergyManagement,
  grayCardsDataEnergyManagementFourth,
  grayCardsDataEnergyManagementSecond,
  grayCardsDataEnergyManagementThird,
} from "../../components/shared/gray-cards/data";

import EnergyManagementLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
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

export default function EnergyManagement() {
  return (
    <EnergyManagementLayout>
      <GrayCardsBox
        data={grayCardsDataEnergyManagement}
        imgheight={400}
        imgwidth={388}
      />
      <Separator />
      <ContentSeparator
        bg="/energy-management/auto-charging-port.svg"
        titlehighlightedstart="HOME EV CHARGING"
        titleend="INSTALLATION"
        containerpadding="30px 0"
        description="POWER UP YOUR RIDE WHILE GOING GREEN WITH WE LIVE 4 EV CHARGING!"
      />
      <GrayCardsBox
        data={grayCardsDataEnergyManagementSecond}
        imgheight={400}
        imgwidth={388}
      />
      <BlackCardsBoxShared
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={blackCardsEnergyManagementData}
      />
      <ContentSeparator
        bg="energy-management/cs-roof.svg"
        titlehighlightedstart="SOLAR POWER SYSTEMS"
        titleend="INSTALLATION"
        description="STABLE ENERGY COSTS MONTH AFTER MONTH!"
        containerpadding="60px 0"
      />
      <GrayCardsBox
        data={grayCardsDataEnergyManagementThird}
        imgheight={230}
        imgwidth={390}
      />
      <BlackCardsBoxShared
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={blackCardsEnergyManagementSecondData}
      />
      <TransparentCard
        titlehighlightedstart="Home"
        titleend="Energy Management System"
        data={transparentCardsContent}
        index={0}
        bg="/energy-management/home-card-bg.svg"
      />
      <TransparentCard
        titlehighlightedstart="Building"
        titleend="Energy Management System"
        data={transparentCardsContent}
        index={1}
        bg="/energy-management/building-card-bg.svg"
      />
      <Separator />
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
      <Separator />
    </EnergyManagementLayout>
  );
}
