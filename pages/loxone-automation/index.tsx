import React from "react";

import AutomationLayout from "./layout";
import { ActionBanner } from "../../components/shared/action-banner";
import { ForResidential } from "../../components/for-residential";
import { ForCommercial } from "../../components/for-commercial";
import { Video } from "../../components/video";

export default function LoxoneAutomation() {
  return (
    <AutomationLayout>
      <ForResidential />
      <ForCommercial />
      <Video />
      <ActionBanner />
    </AutomationLayout>
  );
}
