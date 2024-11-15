import React from "react";

import { Title } from "../../../components/shared/content-separator/styles";

import { Separator } from "../../../components/shared/gray-separator";
import { ConsultationForm } from "../../../components/consultation-form";
import { CustomerCare } from "../../../components/customer-care-banner";
import { OtherWayToConnect } from "../../../components/others-way-to-connect";
import { TextUs } from "../../../components/text-us";

import { Header } from "../../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../../components/hero-title/styles";
import { GreenDivider } from "../../../components/shared/green-divider";
import { Meta } from "../../../components/meta";

export default function Consultation() {
  return (
    <>
      <Meta title="Free Consultation" description="Get A Free Consultation" />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              GET A<Highlighted>FREE CONSULTATION</Highlighted>
              FOR YOUR
              <Highlighted>DREAM HOME!</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('consultation/header-bg.png')`}
        tabletbackground={`url('consultation/tablet/header-bg.png')`}
        desktopbackground={`url('consultation/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
      />
      <Separator height="80px" padding="20px 0">
        <Title>
          <Highlighted>Reach Out To Us!</Highlighted>
        </Title>
      </Separator>
      <ConsultationForm />
      <Separator height="80px" padding="20px 0">
        <Title>Customer Care</Title>
      </Separator>
      <CustomerCare />
      <TextUs />
      <OtherWayToConnect />
    </>
  );
}