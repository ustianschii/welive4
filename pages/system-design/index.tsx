import React from "react";

import SystemDesignLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { DesignTypes } from "../../components/system-design/system-design-cards";
import { BlackCardsBoxShared } from "../../components/shared/black-cards";
import {
  BCSystemDesign,
  BCSystemDesignWBorder,
} from "../../components/shared/black-cards/data";
import { TEXT_US_BACKGROUND } from "@/styles/constants";
import { SystemDesignForm } from "../../components/system-design-form";
import { TextUs } from "../../components/text-us";

export default function SystemDesign() {
  return (
    <SystemDesignLayout>
      <Separator height="100px" padding="20px 0">
        <Title>
          Our System
          <Highlighted>Design Supports</Highlighted>
          For:
        </Title>
      </Separator>
      <DesignTypes />
      <BlackCardsBoxShared
        data={BCSystemDesign}
        titlestart="Why"
        titlehighlightedend="System Design Helps"
        titleend="You"
      />
      <BlackCardsBoxShared
        data={BCSystemDesignWBorder}
        border="2px solid #59B202"
        bgcolor={TEXT_US_BACKGROUND}
        titlestart="HOW"
        titlehighlightedend="WE WORK"
      />
      <Separator height="90px" padding="20px 0 0 0">
        <Title>
          <Highlighted>SYSTEM DESIGN</Highlighted>
          REQUEST
        </Title>
      </Separator>
      <SystemDesignForm />
      <TextUs />
    </SystemDesignLayout>
  );
}
