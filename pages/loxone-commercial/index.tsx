import React from "react";

import CommercialLayout from "./layout";
import { ReturnOnInvestments } from "../../components/return-on-investment";
import { ApplicationScenarios } from "../../components/application-scenarios";
import { GreenBanner } from "../../components/shared/green-banner";

import { data } from "./data";
import { KeyFeatures } from "../../components/key-features";
import { PartneredInstaller } from "../../components/partnered-installer";
import { ActionBanner } from "../../components/shared/action-banner";

export default function LoxoneCommercial() {
  return (
    <CommercialLayout>
      <ReturnOnInvestments />
      <ApplicationScenarios />
      <GreenBanner
        title={data[0].title}
        first_description={data[0].first_description}
        second_description={data[0].second_description}
      />
      <KeyFeatures />
      <PartneredInstaller />
      <ActionBanner />
    </CommercialLayout>
  );
}
