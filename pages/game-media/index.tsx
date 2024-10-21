import React from "react";

import { Separator } from "../../components/shared/gray-separator";
import GameMediaLayout from "./layout";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  GCGameMediaBottom,
  GCGameMediaTop,
} from "../../components/shared/gray-cards/data";
import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";

export default function HomeTheater() {
  return (
    <GameMediaLayout>
      <Separator />
      <GrayCardsBox data={GCGameMediaTop} imgheight={400} imgwidth={388} />
      <Separator height="150px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM <br />
          OUR SERVICE
        </Title>
      </Separator>
      <GrayCardsBox data={GCGameMediaBottom} imgheight={400} imgwidth={388} />
      <Separator />
    </GameMediaLayout>
  );
}
