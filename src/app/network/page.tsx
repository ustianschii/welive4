import React from "react";

import { Box } from "@mui/material";

import { GrayCardsBox } from "../../../components/shared/gray-cards";
import { BlackCardsBoxShared } from "../../../components/shared/black-cards";
import { blackCardsData } from "../../../components/shared/black-cards/data";
import { grayCardsData } from "../../../components/shared/gray-cards/data";
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

export default function Network() {
  return (
    <>
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>
                PROFESSIONAL <br />
              </Highlighted>
              NETWORK INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/network/header-bg.png')`}
        tabletbackground={`url('/network/tablet/header-bg.png')`}
        desktopbackground={`url('/network/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
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
