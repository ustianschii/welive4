import React from "react";
import { ChecklistLongFields } from "../../../components/cheklist-long-fields";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function ChecklistLong() {
  return (
    <>
      <Meta title="Last step" />
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        title={
          <Subtitle sx={{ marginTop: "50px" }}>
            Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="100px"
      />
      <ChecklistLongFields />
    </>
  );
}
