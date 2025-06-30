import React from "react";

import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted, Subtitle } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";
import { CCChecklistLong } from "@/components/cc-checklist-long";
import { Container, Wrapper } from "@/src/styles/checklist-long-styles";
import { metadata } from "@/src/app/metadata";

export default function ChecklistLong() {
  return (
    <>
      <Meta title={metadata.ChecklistLong.title} />
      <Header
        background={{
          backColor: SEPARATOR_BACKGROUND,
        }}
        layout={{
          mobileHeight: "200px",
          tabletHeight: "150px",
          desktopHeight: "150px",
        }}
        content={{
          title: (
            <Subtitle sx={{ marginTop: "50px" }}>
              Fill up the <Highlighted>Smart Technology Checklist</Highlighted>{" "}
              below
            </Subtitle>
          ),
        }}
      />
      <Wrapper>
        <Container>
          <CCChecklistLong />
        </Container>
      </Wrapper>
    </>
  );
}
