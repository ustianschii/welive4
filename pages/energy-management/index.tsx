import React from "react";

import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  grayCardsDataEnergyManagement,
  grayCardsDataEnergyManagementSecond,
} from "../../components/shared/gray-cards/data";

import EnergyManagementLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { ContentSeparator } from "../../components/shared/content-separator";

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
    </EnergyManagementLayout>
  );
}
