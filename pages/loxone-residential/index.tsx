import React from "react";

import ResidentialLayout from "./layout";
import { NewFuture } from "../../components/new-future";
import { CustomTabs } from "../../components/loxone-residential-tabs";
import { GreenBanner } from "../../components/shared/green-banner";

import { data } from "../../components/shared/green-banner/data";
import { KeyFeatures } from "../../components/key-features";
import { dataLoxoneCommercial } from "../../components/key-features/data";
import { Personalize } from "../../components/personalize-loxone";
import { ActionBanner } from "../../components/shared/action-banner";

export default function LoxoneCommercial() {
  return (
    <ResidentialLayout>
      <NewFuture />
      <CustomTabs />
      <GreenBanner
        title={data[1].title}
        first_description={data[1].first_description}
      />
      <KeyFeatures
        data={dataLoxoneCommercial}
        flex="1 1 calc(25% )"
        gap="10px"
        maxW="calc(24% )"
      />
      <Personalize />
      <ActionBanner />
    </ResidentialLayout>
  );
}
