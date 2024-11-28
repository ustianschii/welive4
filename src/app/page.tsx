import { MainServices } from "../../components/main-services/index";

import { OurBrands } from "../../components/our-brands";

import { Statistic } from "../../components/statistic";
import { SystemDesign } from "../../components/system-design";
import { SmartControl } from "../../components/smart-control";
import { Everyone } from "../../components/everyone";
import { HowWeWork } from "../../components/how-we-work";
import { WhyChoose } from "../../components/why-choose";
import { Reviews } from "../../components/reviews";
import { GrayCardsBox } from "../../components/shared/gray-cards";
import { Button } from "../../components/shared/gray-cards/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { GCHome } from "../../components/shared/gray-cards/data";
import { Separator } from "../../components/shared/gray-separator";
import { ROUTES } from "./utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

import { Header } from "../../components/shared/header";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

import { Box } from "@mui/material";
import { Meta } from "../../components/meta";

export default function Home() {
  return (
    <>
      <Meta title="WeLive4 | Home" />
      <Header
        background={`url('/header-mobile/header-bg.jpg')`}
        tabletbackground={`url('/header-mobile/desktop/header-bg.jpg')`}
        desktopbackground={`url('/header-mobile/desktop/header-bg.jpg')`}
        mobileheight="600px"
        tabletheight="600px"
        desktopheight="600px"
        title={<HeroTitle />}
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
