import { Box } from "@mui/material";

import { Separator } from "@/components/shared/gray-separator";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  GCGameMediaBottom,
  GCGameMediaTop,
} from "@/components/shared/gray-cards/data";
import { Title } from "@/components/shared/content-separator/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted } from "@/components/hero-title/styles";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function GameMedia() {
  return (
    <>
      <Meta
        title={metadata.GameMedia.title}
        description={metadata.GameMedia.description}
        keywords={metadata.GameMedia.keywords}
      />
      <Header
        background={{
          background: `url('/game-media/header-bg.png')`,
          tabletBackground: `url('/game-media/tablet/header-bg.png')`,
          desktopBackground: `url('/game-media/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "CUSTOMIZED GAME & MEDIA",
          titleEnd: "ROOM INSTALLATION",
          subtitle: [
            "CREATE YOUR PERFECT GAMING AND MEDIA ZONE WITH OUR CUSTOM-DESIGNED SYSTEMS",
          ],
          button: <CustomButton text="GET A FREE QUOTE!" />,
          divider: true,
        }}
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaTop} imgheight={400} imgwidth={388} />
      </Box>
      <Separator height="100px" padding="20px 0">
        <Title>
          <Highlighted>WHAT YOU WILL GET</Highlighted>FROM OUR SERVICE
        </Title>
      </Separator>
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={GCGameMediaBottom} imgheight={400} imgwidth={388} />
      </Box>
    </>
  );
}
