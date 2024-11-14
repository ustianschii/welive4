import React from "react";
import { ChecklistShortFields } from "../../../components/checklist-short-fields";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";

import { Highlighted, Subtitle } from "../../../components/hero-title/styles";

export default function ChecklistShort() {
  return (
    <>
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle sx={{ marginTop: "50px" }}>
            Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
        mobileheight="350px"
        tabletheight="350px"
        desktopheight="300px"
      />
      <ChecklistShortFields />
    </>
  );
}
