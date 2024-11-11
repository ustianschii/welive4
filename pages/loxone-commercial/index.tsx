import React from "react";

import CommercialLayout from "./layout";
import { ReturnOnInvestments } from "../../components/return-on-investment";
import { ApplicationScenarios } from "../../components/application-scenarios";
import { GreenBanner } from "../../components/shared/green-banner";

import { data } from "../../components/shared/green-banner/data";
import { KeyFeatures } from "../../components/key-features";
import { PartneredInstaller } from "../../components/partnered-installer";
import { ActionBanner } from "../../components/shared/action-banner";

import { data as keyfeaturesdata } from "../../components/key-features/data";
import { GreenDivider } from "../../components/shared/green-divider";

export default function LoxoneCommercial() {
  return (
    <CommercialLayout>
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
        maxW="calc(32% )"
        gap="20px"
      />
      <PartneredInstaller />
      <ActionBanner />
    </CommercialLayout>
  );
}
