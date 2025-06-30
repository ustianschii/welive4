import { Separator } from "@/components/shared/gray-separator";
import { Title } from "@/components/shared/content-separator/styles";
import { DesignTypes } from "@/components/system-design/system-design-cards";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import {
  BCSystemDesign,
  BCSystemDesignWBorder,
} from "@/components/shared/black-cards/data";
import { TEXT_US_BACKGROUND } from "@/src/styles/constants";
import { TextUs } from "@/components/text-us";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { CCChecklistSystemDesign } from "@/components/cc-checklist-system-design";
import {
  Container,
  Wrapper,
} from "@/src/styles/checklist-system-design-styles";
import { metadata } from "@/src/app/metadata";

export default function SystemDesign() {
  return (
    <>
      <Meta
        title={metadata.SystemDesign.title}
        description={metadata.SystemDesign.description}
        keywords={metadata.SystemDesign.keywords}
      />
      <Header
        layout={{
          tabletHeight: "700px",
        }}
        background={{
          background: `url('system-design/header-bg.jpg')`,
          tabletBackground: `url('system-design/desktop/header-bg.jpg')`,
          desktopBackground: `url('system-design/desktop/header-bg.jpg')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                SYSTEM <Highlighted>DESIGN</Highlighted>
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: [
            "At WE LIVE 4, we're dedicated to your satisfaction, right from the beginning to the end. Our seamless design process ensures that your unique needs are met while also saving your valuable time and money.",
            "We believe in optimizing system performance to its fullest potential. Trust us for expert advice and enjoy free consultations—we're here to turn your vision into reality!",
          ],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
      />

      <Separator height="100px" padding="20px 0">
        <Title>
          Our System
          <Highlighted>Design Supports</Highlighted>
          For:
        </Title>
      </Separator>
      <DesignTypes />
      <BlackCardsBoxShared
        upmdwidth="49%"
        data={BCSystemDesign}
        titlestart="Why"
        titlehighlightedend="System Design Helps"
        titleend="You"
      />
      <BlackCardsBoxShared
        upmdwidth="24%"
        data={BCSystemDesignWBorder}
        border="2px solid #59B202"
        bgcolor={TEXT_US_BACKGROUND}
        titlestart="HOW"
        titlehighlightedend="WE WORK"
      />
      <Separator height="90px" padding="20px 0 0 0">
        <Title>
          <Highlighted>SYSTEM DESIGN</Highlighted>
          REQUEST
        </Title>
      </Separator>
      <Wrapper>
        <Container>
          <CCChecklistSystemDesign />
        </Container>
      </Wrapper>
      <TextUs />
    </>
  );
}
