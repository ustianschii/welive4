import React from "react";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
// import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";
import { Container, Wrapper } from "@/styles/checklist-presentation-styles";
import { CCChecklistPresentation } from "../../../components/cc-checklist-presentation";

export default function Presentation() {
  return (
    <>
      <Meta title="Loxone Presentation" />
      <Header
        backcolor={SEPARATOR_BACKGROUND}
        // title={
        //   <Subtitle sx={{ marginTop: "50px" }}>
        //     Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
        //     below
        //   </Subtitle>
        // }
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
