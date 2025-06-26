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
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { ROUTES } from "@/src/app/utils/routes-constants";

import { Box } from "@mui/material";

export default function HomeTheater() {
  return (
    <>
      <Meta
        title="Whole Home Audio Systems - Customized Sound Solutions for Every Room"
        description="Discover premium whole-home audio systems with expert design and seamless speaker concealment. Enhance your lifestyle with personalized sound solutions for every space."
        keywords={[
          "home audio",
          "5.1",
          "5.2",
          "7.1",
          "7.2",
          "subwoofer",
          "speakers",
          "high-end",
          "streaming",
        ]}
      />
      <Header
        background={{
          background: `url('/home-audio/header-bg.png')`,
          tabletBackground: `url('/home-audio/tablet/header-bg.png')`,
          desktopBackground: `url('/home-audio/desktop/header-bg.png')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                WHOLE <Highlighted>HOME AUDIO</Highlighted> SYSTEMS
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: [
            "STREAMING YOUR FAVORITE SONGS IN EVERY CORNER OF YOUR HOME!",
          ],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCHomeAudioFirst} imgheight={400} imgwidth={388} />
      </Box>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
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
