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
      <Meta
        title="WeLive4 | Home"
        description="Smart technology has many cool designs and solutions to make your life more comfortable and bring additional passive income to your household - not to mention more fun!"
      />
      <Header
        background={`url('/header-mobile/header-bg.png')`}
        tabletbackground={`url('/header-mobile/tablet/header-bg.png')`}
        desktopbackground={`url('/header-mobile/desktop/header-bg.png')`}
        mobileheight="600px"
        tabletheight="600px"
        desktopheight="600px"
        title={<HeroTitle />}
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
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
              GET A<Highlighted>RGBW</Highlighted> DESIGN
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
