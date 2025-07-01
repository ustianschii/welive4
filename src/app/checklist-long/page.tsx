import React from "react";

import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
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
          isHeaderTop: true,
        }}
        content={{
          titleStart: "Fill up the",
          titleHighStart: "Smart Technology Checklist",
          titleEnd: "Below",
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
