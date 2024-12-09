import React from "react";

import { Box } from "@mui/material";

import { GrayCardsBox } from "@/components/shared/gray-cards";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { blackCardsData } from "@/components/shared/black-cards/data";
import { grayCardsData } from "@/components/shared/gray-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";

export default function Network() {
  return (
    <>
      <Meta
        title="Network"
        description="Lightning-fast Network Installation"
        keywords={[
          "network",
          "wifi",
          "network for business",
          "network for rural areas",
          "on-site survey",
          "ethernet wired network",
          "wirless",
          "sattelite internet",
          "cellular booster",
          "lte 5g",
          "multi-gps",
          "ptp wireless bridge",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>PROFESSIONAL</Highlighted>
              NETWORK INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/network/header-bg.png')`}
        tabletbackground={`url('/network/tablet/header-bg.png')`}
        desktopbackground={`url('/network/desktop/header-bg.png')`}
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="YOUR DEVICES. YOUR NEEDS. YOUR PERFECT NETWORK" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={grayCardsData} imgheight={260} imgwidth={388} />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="24%"
        data={blackCardsData}
        titlestart="OUR"
        titlehighlightedend="SOLUTIONS"
      />
    </>
  );
}
