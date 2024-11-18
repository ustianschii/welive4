import React from "react";

import { ReturnOnInvestments } from "../../../components/return-on-investment";
import { ApplicationScenarios } from "../../../components/application-scenarios";
import { GreenBanner } from "../../../components/shared/green-banner";

import { data } from "../../../components/shared/green-banner/data";
import { KeyFeatures } from "../../../components/key-features";
import { PartneredInstaller } from "../../../components/partnered-installer";
import { ActionBanner } from "../../../components/shared/action-banner";

import { data as keyfeaturesdata } from "../../../components/key-features/data";

import { Header } from "../../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { GreenDivider } from "../../../components/shared/green-divider";
import { HeaderSubtitle } from "../../../components/shared/header-subtitle";
import { Meta } from "../../../components/meta";

export default function LoxoneCommercial() {
  return (
    <>
      <Meta
        title="Loxone Commercial"
        description="The New Future Of Smart Automation"
        keywords={[
          "loxone",
          "smart home",
          "automation",
          "access control",
          "lighting control",
          "climate control",
          "security",
          "energy management",
          "ambient assisted living",
          "conference board room",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              <Highlighted>LOXONE</Highlighted>FOR COMMERCIAL
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/loxone-commercial/header-bg-mobile.png')`}
        tabletbackground={`url('/loxone-commercial/tablet/header-bg-tablet.png')`}
        desktopbackground={`url('/loxone-commercial/desktop/header-bg.png')`}
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Loxone links everything in your building, giving you flexibility and big energy savings. It's a game-changer for investors, operators, and users."
            second="With Loxone, enjoy rapid ROI as seen in a global franchise restaurant saving 14,000 kWh monthly – paying off the investment in less than a month. Transform your space with Loxone and experience intelligent building automation like never before."
          />
        }
      />
      <ReturnOnInvestments />
      <GreenDivider />
      <ApplicationScenarios />
      <GreenBanner
        titlehighlightedstart="LOXONE"
        titleend="COMMERCIAL SOLUTIONS"
        first_description={data[0].first_description}
        second_description={data[0].second_description}
      />
      <KeyFeatures
        data={keyfeaturesdata}
        flex="1 1 calc(33.33% )"
        maxw="calc(32% )"
        gap="20px"
      />
      <PartneredInstaller />
      <ActionBanner />
    </>
  );
}
