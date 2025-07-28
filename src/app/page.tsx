import { Box } from "@mui/material";

import { MainServices } from "@/components/main-services/index";
import { OurPartners } from "@/components/our-brands";
import { Statistic } from "@/components/statistic";
import { SystemDesign } from "@/components/system-design";
import { SmartControl } from "@/components/smart-control";
import { Everyone } from "@/components/everyone";
import { HowWeWork } from "@/components/how-we-work";
import { WhyChoose } from "@/components/why-choose";
import { Reviews } from "@/components/reviews";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { Button } from "@/components/shared/gray-cards/styles";
import { Highlighted } from "@/components/hero-title/styles";
import { GCHome } from "@/components/shared/gray-cards/data";
import { Separator } from "@/components/shared/gray-separator";
import { ROUTES } from "./utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { CustomButton } from "@/components/shared/header-button";
import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function Home() {
  return (
    <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
      <Meta
        title={metadata.Home.title}
        description={metadata.Home.description}
        keywords={metadata.Home.keywords}
      />
      <Header
        layout={{
          mobileHeight: "600px",
          tabletHeight: "600px",
          desktopHeight: "600px",
        }}
        background={{
          background: `url('/header-mobile/header-bg.jpg')`,
          tabletBackground: `url('/header-mobile/desktop/header-bg.jpg')`,
          desktopBackground: `url('/header-mobile/desktop/header-bg.jpg')`,
        }}
        content={{
          titleHighStart: "WE LIVE 4 ",
          titleEnd: "THE FUTURE OF LIVING ",
          subtitle: ["EXPERIENCE SMART TECHNOLOGY TODAY"],
          button: <CustomButton text="DESIGN YOUR SPACE" />,
          divider: true,
        }}
      />
      <MainServices />
      <OurPartners />
      <Statistic />
      <GrayCardsBox
        data={GCHome}
        button={
          <Button href={ROUTES.GAME_MEDIA}>
            Get Your
            <Highlighted mLeft="5px" mRight="5px">
              Lights
            </Highlighted>
            Design Today!
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
  );
}
