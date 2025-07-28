import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { Container, Wrapper } from "@/src/styles/checklist-short-styles";
import { CCChecklistShort } from "@/components/cc-checklist-short";
import { metadata } from "@/src/app/metadata";

export default function ChecklistShort() {
  return (
    <>
      <Meta title={metadata.ChecklistShort.title} />
      <Header
        background={{
          backColor: SEPARATOR_BACKGROUND,
        }}
        layout={{
          mobileHeight: "200px",
          tabletHeight: "170px",
          desktopHeight: "150px",
          isHeaderTop: true,
        }}
        content={{
          titleStart: "Fill up the ",
          titleHighStart: "Smart Technology Checklist",
          titleEnd: "below",
        }}
      />
      <Wrapper>
        <Container>
          <CCChecklistShort />
        </Container>
      </Wrapper>
    </>
  );
}
