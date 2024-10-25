import React from "react";

import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";

import ConsultationLayout from "./layout";
import { Separator } from "../../components/shared/gray-separator";
import { ConsultationForm } from "../../components/consultation-form";
import { CustomerCare } from "../../components/customer-care-banner";
import { OtherWayToConnect } from "../../components/others-way-to-connect";

export default function Consultation() {
  return (
    <ConsultationLayout>
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
      <OtherWayToConnect />
    </ConsultationLayout>
  );
}
