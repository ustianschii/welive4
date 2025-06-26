import { Box } from "@mui/material";

import { Separator } from "@/components/shared/gray-separator";
import { Title } from "@/components/shared/content-separator/styles";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { Button } from "@/components/shared/gray-cards/styles";
import {
  GCOutdoorEntertainmentSpeaker,
  GCOutdoorEntertainmentTV,
} from "@/components/shared/gray-cards/data";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { BCOutdoorEntertainment } from "@/components/shared/black-cards/data";
import { ROUTES } from "@/src/app/utils/routes-constants";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { CustomButton } from "@/components/shared/header-button";
import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";

export default function OutdoorEntertainment() {
  return (
    <>
      <Meta
        title="Outdoor Entertainment System Installation & Design"
        description="Elevate your outdoor experience with WE LIVE 4’s premium entertainment systems. From weatherproof TVs to custom speaker setups, enjoy stunning visuals and immersive sound tailored to your space."
        keywords={[
          "outdoor entertainment",
          "outdoor tv",
          "outdoor speakers",
          "audio video calibration",
          "weather proof speakers",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              <Highlighted>OUTDOOR ENTERTAINMENT</Highlighted> <br />
              SYSTEM INSTALLATION & DESIGN
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/outdoor-entertainment/header-bg.png')`}
        tabletbackground={`url('/outdoor-entertainment/tablet/header-bg.png')`}
        desktopbackground={`url('/outdoor-entertainment/desktop/header-bg.png')`}
        subtitle={
          <HeaderSubtitle
            subtitles={[
              "YOUR ONE-STOP SHOP FOR A PROFESSIONAL OUTDOOR ENTERTAINMENT SYSTEM INSTALLATION!",
            ]}
          />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      <Separator height="130px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM <br />
          OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={GCOutdoorEntertainmentTV}
          imgheight={400}
          imgwidth={388}
          button={<Button href={ROUTES.OUTDOOR_TV}>LEARN MORE &#10230;</Button>}
        />
        <GrayCardsBox
          data={GCOutdoorEntertainmentSpeaker}
          imgheight={400}
          imgwidth={388}
        />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="49%"
        titlestart="Why Choose"
        titlehighlightedend="WE LIVE 4 for Your Outdoor Entertainment?"
        data={BCOutdoorEntertainment}
      />
    </>
  );
}
