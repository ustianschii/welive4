import React from "react";
import { ChecklistLongFields } from "../../../components/cheklist-long-fields";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Header } from "../../../components/shared/header";

import { GreenDivider } from "../../../components/shared/green-divider";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function ChecklistLong() {
  return (
    <>
      <Meta title="Last step" />
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle sx={{ marginTop: "50px" }}>
            Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
        mobileheight="250px"
        tabletheight="250px"
        desktopheight="250px"
      />
      <ChecklistLongFields />
    </>
  );
}
