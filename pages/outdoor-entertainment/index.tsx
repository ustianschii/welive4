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

export default function OutdoorEntertainment() {
  return (
    <OutdoorEntertainmentLayout>
      <Separator height="150px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM <br />
          OUR SERVICE
        </Title>
      </Separator>
      <GrayCardsBox
        data={GCOutdoorEntertainmentTV}
        imgheight={400}
        imgwidth={388}
        button={<Button>LEARN MORE &#10230;</Button>}
      />
      <GrayCardsBox
        data={GCOutdoorEntertainmentSpeaker}
        imgheight={400}
        imgwidth={388}
      />
      <BlackCardsBoxShared
        titlestart="Why Choose"
        titlehighlightedend="WE LIVE 4 for Your Outdoor Entertainment?"
        data={BCOutdoorEntertainment}
      />
    </OutdoorEntertainmentLayout>
  );
}
