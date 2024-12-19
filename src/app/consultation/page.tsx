import React from "react";

import { Title } from "@/components/shared/content-separator/styles";

import { Separator } from "@/components/shared/gray-separator";
import { CustomerCare } from "@/components/customer-care-banner";
import { OtherWayToConnect } from "@/components/others-way-to-connect";
import { TextUs } from "@/components/text-us";

import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";
import { Container, Wrapper } from "@/src/styles/checklist-consultation";
import { CCChecklistConsultation } from "@/components/cc-checklist-consultation";

export default function Consultation() {
  return (
    <>
      <Meta
        title="Automation Consulting"
        description="Consulting for smart automation systems, helping homeowners and builders integrate innovative tech with customized solutions and seamless connectivity."
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              GET A<Highlighted>FREE CONSULTATION</Highlighted>
              FOR YOUR
              <Highlighted>DREAM HOME!</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('consultation/header-bg.png')`}
        tabletbackground={`url('consultation/tablet/header-bg.png')`}
        desktopbackground={`url('consultation/desktop/header-bg.png')`}
        mobileheight="500px"
        tabletheight="600px"
        desktopheight="600px"
        divider={<GreenDivider />}
      />
      <Separator height="80px" padding="20px 0">
        <Title>Customer Care</Title>
      </Separator>
      <CustomerCare />
      <TextUs />
      <Separator height="80px" padding="20px 0">
        <Title>
          <Highlighted>Fill Out Your Request!</Highlighted>
        </Title>
      </Separator>
      <Wrapper>
        <Container>
          <CCChecklistConsultation />
        </Container>
      </Wrapper>
      <OtherWayToConnect />
    </>
  );
}
