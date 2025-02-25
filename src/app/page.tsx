import { Box } from "@mui/material";

import { MainServices } from "@/components/main-services/index";
import { OurBrands } from "@/components/our-brands";
import { Statistic } from "@/components/statistic";
import { SystemDesign } from "@/components/system-design";
import { SmartControl } from "@/components/smart-control";
import { Everyone } from "@/components/everyone";
import { HowWeWork } from "@/components/how-we-work";
import { WhyChoose } from "@/components/why-choose";
import { Reviews } from "@/components/reviews";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { Button } from "@/components/shared/gray-cards/styles";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
  Title,
} from "@/components/hero-title/styles";
import { GCHome } from "@/components/shared/gray-cards/data";
import { Separator } from "@/components/shared/gray-separator";
import { ROUTES } from "./utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { CustomButton } from "@/components/shared/header-button";
import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Integrate Technology for Smart Homes, Offices, and Premium Entertainment Systems"
        description="We integrate advanced automation systems, including Loxone Smart Home solutions and expert insights on Crestron vs Control4, to enhance convenience, efficiency, and comfort. Our services also include outdoor TV installation in NJ and outdoor TV mounting services, ensuring a seamless experience for your premium entertainment systems."
      />
      <Header
        background={`url('/header-mobile/header-bg.jpg')`}
        tabletbackground={`url('/header-mobile/desktop/header-bg.jpg')`}
        desktopbackground={`url('/header-mobile/desktop/header-bg.jpg')`}
        mobileheight="600px"
        tabletheight="600px"
        desktopheight="600px"
        title={
          <HeaderTextBox>
            <Title component="h1">EXPERIENCE SMART TECHNOLOGY TODAY</Title>
            <Subtitle>
              WE
              <Highlighted>LIVE</Highlighted>4 THE
              <Highlighted>FUTURE</Highlighted>OF LIVING
            </Subtitle>
          </HeaderTextBox>
        }
        button={<CustomButton text={"DESIGN YOUR SPACE"} />}
        divider={<GreenDivider />}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <MainServices />
        <OurBrands />
        <Statistic />
        <GrayCardsBox
          data={GCHome}
          button={
            <Button href={ROUTES.GAME_MEDIA}>
              Get Your<Highlighted>Lights</Highlighted> Design Today!
            </Button>
          }
        />
        <Separator />
        <GreenDivider />
        <SystemDesign />
        <SmartControl />
        <Everyone />
        <HowWeWork />
        <WhyChoose />
        <Reviews />
      </Box>
    </>
  );
}
