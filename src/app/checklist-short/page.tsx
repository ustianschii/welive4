import React from "react";
import { ChecklistShortFields } from "../../../components/checklist-short-fields";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function ChecklistShort() {
  return (
    <>
      <Meta title="Checklist" />
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        title={
          <Subtitle sx={{ marginTop: "50px" }}>
            Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
        mobileheight="200px"
        tabletheight="170px"
        desktopheight="150px"
      />
      <ChecklistShortFields />
    </>
  );
}
