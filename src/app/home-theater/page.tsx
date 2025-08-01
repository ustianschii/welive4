import { Box } from "@mui/material";

import { Separator } from "@/components/shared/gray-separator";
import { Title } from "@/components/shared/content-separator/styles";
import { Button } from "@/components/shared/gray-cards/styles";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { GCHomeTheater } from "@/components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { BCHomeTheater } from "@/components/shared/black-cards/data";
import { ContentSeparator } from "@/components/shared/content-separator";
import { CustomAccordion } from "@/components/shared/accordion";
import { homeTheaterFaq } from "@/components/shared/accordion/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted } from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function HomeTheater() {
  return (
    <>
      <Meta
        title={metadata.HomeTheater.title}
        description={metadata.HomeTheater.description}
        keywords={metadata.HomeTheater.keywords}
      />
      <Header
        background={{
          background: `url('/home-theater/header-bg.png')`,
          tabletBackground: `url('/home-theater/tablet/header-bg.png')`,
          desktopBackground: `url('/home-theater/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "HIGH-END HOME THEATER",
          titleEnd: "SYSTEMS",
          subtitle: [
            "EXPERIENCE SUPERIOR AUDIO QUALITY WITH OUR HOME THEATER SOUND SYSTEM TAILORED JUST FOR YOU!",
          ],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
      />

      <Separator height="90px" padding="25px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>
          FROM OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={GCHomeTheater}
          imgheight={400}
          imgwidth={388}
          button={
            <Button href={GCHomeTheater[0].link}>LEARN MORE &#10230;</Button>
          }
        />
      </Box>

      <BlackCardsBoxShared
        upmdwidth="32%"
        titlestart="Why Choose"
        titlehighlightedend="We LIVE 4 for Your Home Theater?"
        data={BCHomeTheater}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/tablet/cs-bg-tablet.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        containerpadding="20px 0 0 0"
      />
      <CustomAccordion data={homeTheaterFaq} />
    </>
  );
}
