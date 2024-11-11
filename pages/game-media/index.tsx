import React from "react";

import { Box } from "@mui/material";

import { Separator } from "../../components/shared/gray-separator";
import GameMediaLayout from "./layout";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import {
  GCGameMediaBottom,
  GCGameMediaTop,
} from "../../components/shared/gray-cards/data";
import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export default function HomeTheater() {
  return (
    <GameMediaLayout>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaTop} imgheight={400} imgwidth={388} />
      </Box>
      <Separator height="100px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaBottom} imgheight={400} imgwidth={388} />
      </Box>
    </GameMediaLayout>
  );
}
