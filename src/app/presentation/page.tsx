import React from "react";

import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { Container, Wrapper } from "@/src/styles/checklist-presentation-styles";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { CCChecklistPresentation } from "@/components/cc-checklist-presentation";

export default function Presentation() {
  return (
    <>
      <Meta title="Loxone Presentation" />
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        mobileheight="200px"
        tabletheight="170px"
        desktopheight="150px"
      />
      <Wrapper>
        <Container>
          <CCChecklistPresentation />
        </Container>
      </Wrapper>
    </>
  );
}
