import React from "react";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";
import { CCChecklistLong } from "../../../components/cc-checklist-long";
import { Container, Wrapper } from "@/styles/checklist-long-styles";

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
        mobileheight="200px"
        tabletheight="150px"
        desktopheight="150px"
      />
      <Wrapper>
        <Container>
          <CCChecklistLong />
        </Container>
      </Wrapper>
    </>
  );
}
