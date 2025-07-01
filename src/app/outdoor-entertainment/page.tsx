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
import { Highlighted } from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function OutdoorEntertainment() {
  return (
    <>
      <Meta
        title={metadata.OutdoorEntertainment.title}
        description={metadata.OutdoorEntertainment.description}
        keywords={metadata.OutdoorEntertainment.keywords}
      />
      <Header
        background={{
          background: `url('/outdoor-entertainment/header-bg.png')`,
          tabletBackground: `url('/outdoor-entertainment/tablet/header-bg.png')`,
          desktopBackground: `url('/outdoor-entertainment/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "OUTDOOR ENTERTAINMENT",
          titleEnd: "SYSTEM INSTALLATION & DESIGN",
          subtitle: [
            "YOUR ONE-STOP SHOP FOR A PROFESSIONAL OUTDOOR ENTERTAINMENT SYSTEM INSTALLATION!",
          ],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
      />

      <Separator height="130px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM <br />
          OUR SERVICE
        </Title>
      </Separator>
      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
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
