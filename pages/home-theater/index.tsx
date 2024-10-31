import React from "react";

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

export default function HomeTheater() {
  return (
    <HomeTheaterLayout>
      <Separator height="100px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>
          <br />
          FROM OUR SERVICE
        </Title>
      </Separator>

      {GCHomeTheater.map((item, index) => {
        return (
          <GrayCardsBox
            key={index}
            data={item}
            imgheight={400}
            imgwidth={388}
            button={<Button href={item[0].link}>LEARN MORE &#10230;</Button>}
          />
        );
      })}
      <BlackCardsBoxShared
        titlestart="Why Choose"
        titlehighlightedend="We LIVE 4 for Your Home Theater?"
        data={BCHomeTheater}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        titlepadding="10px 0 0 0"
      />
      <CustomAccordion data={homeTheaterFaq} />
    </HomeTheaterLayout>
  );
}
