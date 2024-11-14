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
import { ROUTES } from "../../utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

// import { Open_Sans, Raleway } from "next/font/google";

// import { ThemeProvider } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Header } from "../../components/shared/header";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

// import theme from "../styles/theme";
// import { Meta } from "../../components/meta";
// import Head from "next/head";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header
        background={`url('/header-mobile/header-bg.png')`}
        tabletbackground={`url('/header-mobile/tablet/header-bg.png')`}
        desktopbackground={`url('/header-mobile/desktop/header-bg.png')`}
        desktopheight="700px"
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
