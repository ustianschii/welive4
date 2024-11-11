import React from "react";

import { Box } from "@mui/material";

import HomeTheaterLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { Title } from "../../components/shared/content-separator/styles";
import { Button } from "../../components/shared/gray-cards/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { GCHomeTheater } from "../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { BCHomeTheater } from "../../components/shared/black-cards/data";
import { ContentSeparator } from "../../components/shared/content-separator";
import { CustomAccordion } from "../../components/shared/accordion";
import { homeTheaterFaq } from "../../components/shared/accordion/data";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export default function HomeTheater() {
  return (
    <HomeTheaterLayout>
      <Separator height="90px" padding="25px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>
          FROM OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={GCHomeTheater}
          imgheight={400}
          imgwidth={388}
          button={
            <Button href={GCHomeTheater[0].link}>LEARN MORE &#10230;</Button>
          }
        />
      </Box>

      <BlackCardsBoxShared
        upmdwidth="32%"
        titlestart="Why Choose"
        titlehighlightedend="We LIVE 4 for Your Home Theater?"
        data={BCHomeTheater}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/tablet/cs-bg-tablet.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={homeTheaterFaq} />
    </HomeTheaterLayout>
  );
}
