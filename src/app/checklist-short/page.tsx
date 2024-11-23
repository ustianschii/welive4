import React from "react";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";
// import { HSFormChecklistShort } from "@/../components/hs-form-checklist-short/index";
import { Container, Wrapper } from "@/styles/checklist-short-styles";
import { ChecklistShortFields } from "../../../components/checklist-short-fields";

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
      <Wrapper>
        <Container>
          <ChecklistShortFields />
          {/* <HSFormChecklistShort /> */}
        </Container>
      </Wrapper>
    </>
  );
}
