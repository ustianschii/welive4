import { Box } from "@mui/material";

import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  GCHomeAudioFirst,
  GCHomeAudioSecond,
} from "@/components/shared/gray-cards/data";
import { Button } from "@/components/shared/gray-cards/styles";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { BCHomeAudio } from "@/components/shared/black-cards/data";
import { ContentSeparator } from "@/components/shared/content-separator";
import { CustomAccordion } from "@/components/shared/accordion";
import { homeAudioFaq } from "@/components/shared/accordion/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted } from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { ROUTES } from "@/src/app/utils/routes-constants";
import { metadata } from "@/src/app/metadata";

export default function HomeAudio() {
  return (
    <>
      <Meta
        title={metadata.HomeAudio.title}
        description={metadata.HomeAudio.description}
        keywords={metadata.HomeAudio.keywords}
      />
      <Header
        background={{
          background: `url('/home-audio/header-bg.png')`,
          tabletBackground: `url('/home-audio/tablet/header-bg.png')`,
          desktopBackground: `url('/home-audio/desktop/header-bg.png')`,
        }}
        content={{
          titleStart: "WHOLE",
          titleHighEnd: "HOME AUDIO SYSTEMS",
          subtitle: [
            "STREAMING YOUR FAVORITE SONGS IN EVERY CORNER OF YOUR HOME!",
          ],
          button: <CustomButton text="GET A FREE QUOTE!" />,
          divider: true,
        }}
      />
      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
        <GrayCardsBox data={GCHomeAudioFirst} imgheight={400} imgwidth={388} />
      </Box>
      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
        <GrayCardsBox
          data={GCHomeAudioSecond}
          imgheight={400}
          imgwidth={388}
          button={
            <Button href={ROUTES.LOXONE_PRESENTATION_REQUEST}>
              MORE ABOUT<Highlighted>LOXONE</Highlighted> &#10230;
            </Button>
          }
        />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="WHY CHOOSE"
        titlehighlightedend="WE LIVE 4"
        data={BCHomeAudio}
      />
      <ContentSeparator
        bg="/outdoor-tv/cs-bg.png"
        tabletbg="/outdoor-tv/desktop/cs-bg.png"
        titlestart="Frequently"
        titlehighlightedend="Asked Questions"
        containerpadding="20px 0 0 0"
      />
      <CustomAccordion data={homeAudioFaq} />
    </>
  );
}
