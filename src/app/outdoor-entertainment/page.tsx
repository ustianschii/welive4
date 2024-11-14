import React from "react";
import { Separator } from "../../../components/shared/gray-separator";
import { Title } from "../../../components/shared/content-separator/styles";
import { GrayCardsBox } from "../../../components/shared/gray-cards";
import { Button } from "../../../components/shared/gray-cards/styles";
import {
  GCOutdoorEntertainmentSpeaker,
  GCOutdoorEntertainmentTV,
} from "../../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../../components/shared/black-cards";
import { BCOutdoorEntertainment } from "../../../components/shared/black-cards/data";
import { ROUTES } from "../../../utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { HeaderSubtitle } from "../../../components/shared/header-subtitle";
import { CustomButton } from "../../../components/shared/header-button";
import { GreenDivider } from "../../../components/shared/green-divider";

import { Box } from "@mui/material";

export default function OutdoorEntertainment() {
  return (
    <>
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>OUTDOOR ENTERTAINMENT</Highlighted> <br />
              SYSTEM INSTALLATION & DESIGN
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/outdoor-entertainment/header-bg.png')`}
        tabletbackground={`url('/outdoor-entertainment/tablet/header-bg.png')`}
        desktopbackground={`url('/outdoor-entertainment/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="YOUR ONE-STOP SHOP FOR A PROFESSIONAL OUTDOOR ENTERTAINMENT SYSTEM INSTALLATION!" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      <Separator height="130px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM <br />
          OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={GCOutdoorEntertainmentTV}
          imgheight={400}
          imgwidth={388}
          button={<Button href={ROUTES.OUTDOOR_TV}>LEARN MORE &#10230;</Button>}
        />
        <GrayCardsBox
          data={GCOutdoorEntertainmentSpeaker}
          imgheight={400}
          imgwidth={388}
        />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="Why Choose"
        titlehighlightedend="WE LIVE 4 for Your Outdoor Entertainment?"
        data={BCOutdoorEntertainment}
      />
    </>
  );
}
