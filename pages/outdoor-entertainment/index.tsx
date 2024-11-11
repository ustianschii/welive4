import React from "react";
import OutdoorEntertainmentLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { Button } from "../../components/shared/gray-cards/styles";
import {
  GCOutdoorEntertainmentSpeaker,
  GCOutdoorEntertainmentTV,
} from "../../components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import { BCOutdoorEntertainment } from "../../components/shared/black-cards/data";
import { ROUTES } from "../../utils/routes-constants";
import { Box } from "@mui/material";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export default function OutdoorEntertainment() {
  return (
    <OutdoorEntertainmentLayout>
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
    </OutdoorEntertainmentLayout>
  );
}
