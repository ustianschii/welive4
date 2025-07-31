import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { Container, Wrapper } from "@/src/styles/checklist-presentation-styles";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { CCChecklistPresentation } from "@/components/cc-checklist-presentation";
import { metadata } from "@/src/app/metadata";

export default function Presentation() {
  return (
    <>
      <Meta title={metadata.Presentation.title} />
      <Header
        layout={{
          mobileHeight: "50px",
          tabletHeight: "50px",
          desktopHeight: "150px",
        }}
        background={{
          backColor: SEPARATOR_BACKGROUND,
        }}
      />
      <Wrapper>
        <Container>
          <CCChecklistPresentation />
        </Container>
      </Wrapper>
    </>
  );
}
