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
import { GreenDivider } from "@/components/shared/green-divider";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { CCChecklistSystemDesign } from "@/components/cc-checklist-system-design";
import {
  Container,
  Wrapper,
} from "@/src/styles/checklist-system-design-styles";

export default function SystemDesign() {
  return (
    <>
      <Meta
        title="Comprehensive System Design Solutions | Smart Automation, Networking & AV"
        description="Optimize your home or business with tailored automation, network, entertainment, and energy solutions. Our seamless design process ensures performance, efficiency, and satisfaction from start to finish."
        keywords={[
          "system design",
          "home automation",
          "commercial automation",
          "network system",
          "entertainment system",
          "ev charging",
          "solar energy",
          "av integration",
          "energy management",
          "seura",
          "frame tv",
          "tv setup",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              SYSTEM
              <Highlighted>DESIGN</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('system-design/header-bg.jpg')`}
        tabletbackground={`url('system-design/desktop/header-bg.jpg')`}
        desktopbackground={`url('system-design/desktop/header-bg.jpg')`}
        tabletheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            subtitles={[
              "At WE LIVE 4, we're dedicated to your satisfaction, right from the beginning to the end. Our seamless design process ensures that your unique needs are met while also saving your valuable time and money.",
              "We believe in optimizing system performance to its fullest potential. Trust us for expert advice and enjoy free consultations—we're here to turn your vision into reality!",
            ]}
          />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
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
