import React from "react";

import SystemDesignLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { DesignTypes } from "../../components/system-design-cards";
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
      <Separator height="120px" padding="20px 0">
        <Title>
          Our System
          <Highlighted>
            Design <br />
            Supports
          </Highlighted>
          For:
        </Title>
      </Separator>
      <DesignTypes />
      <Separator height="10px" padding="20px 0 0 0">
        <Title>
          Why
          <Highlighted>
            System Design
            <br />
            Helps
          </Highlighted>
          You
        </Title>
      </Separator>
      <BlackCardsBoxShared data={BCSystemDesign} />
      <Separator height="10px" padding="0 0 0 0">
        <Title>
          HOW <br />
          <Highlighted>WE WORK</Highlighted>
        </Title>
      </Separator>
      <BlackCardsBoxShared
        data={BCSystemDesignWBorder}
        border="2px solid #59B202"
        bgcolor={TEXT_US_BACKGROUND}
      />
      <Separator height="90px" padding="0 0 0 0">
        <Title>
          <Highlighted>
            SYSTEM DESIGN
            <br />
          </Highlighted>
          REQUEST
        </Title>
      </Separator>
      <SystemDesignForm />
      <TextUs />
    </SystemDesignLayout>
  );
}
