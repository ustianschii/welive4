import { Title } from "@/components/shared/content-separator/styles";
import { Separator } from "@/components/shared/gray-separator";
import { CustomerCare } from "@/components/customer-care-banner";
import { OtherWayToConnect } from "@/components/others-way-to-connect";
import { TextUs } from "@/components/text-us";
import { Header } from "@/components/shared/header";
import { Highlighted } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";
import { Container, Wrapper } from "@/src/styles/checklist-consultation";
import { CCChecklistConsultation } from "@/components/cc-checklist-consultation";
import { metadata } from "@/src/app/metadata";

export default function Consultation() {
  return (
    <>
      <Meta
        title={metadata.Consultation.title}
        description={metadata.Consultation.description}
      />
      <Header
        layout={{
          mobileHeight: "500px",
          tabletHeight: "600px",
          desktopHeight: "600px",
        }}
        background={{
          background: `url('consultation/header-bg.png')`,
          tabletBackground: `url('consultation/tablet/header-bg.png')`,
          desktopBackground: `url('consultation/desktop/header-bg.png')`,
        }}
        content={{
          titleStart: "GET A ",
          titleHighStart: "FREE CONSULTATION",
          titleEnd: " FOR YOUR DREAM HOME!",
          divider: true,
        }}
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
