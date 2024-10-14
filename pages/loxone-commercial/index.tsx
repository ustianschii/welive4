import React from "react";

import CommercialLayout from "./layout";
import { ReturnOnInvestments } from "../../components/return-on-investment";
import { ApplicationScenarios } from "../../components/application-scenarios";

export default function LoxoneCommercial() {
  return (
    <CommercialLayout>
      <ReturnOnInvestments />
      <ApplicationScenarios />
    </CommercialLayout>
  );
}
