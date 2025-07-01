import { Box } from "@mui/material";

import { GrayCardsBox } from "@/components/shared/gray-cards";
import { BlackCardsBoxShared } from "@/components/shared/black-cards";
import { blackCardsData } from "@/components/shared/black-cards/data";
import { grayCardsData } from "@/components/shared/gray-cards/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { CustomButton } from "@/components/shared/header-button";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function Network() {
  return (
    <>
      <Meta
        title={metadata.Network.title}
        description={metadata.Network.description}
        keywords={metadata.Network.keywords}
      />
      <Header
        background={{
          background: `url('/network/header-bg.png')`,
          tabletBackground: `url('/network/tablet/header-bg.png')`,
          desktopBackground: `url('/network/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "PROFESSIONAL",
          titleEnd: "NETWORK INSTALLATION",
          subtitle: ["YOUR DEVICES. YOUR NEEDS. YOUR PERFECT NETWORK"],
          button: <CustomButton text="GET A FREE QUOTE!" />,
          divider: true,
        }}
      />

      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={grayCardsData} imgheight={260} imgwidth={388} />
      </Box>
      <BlackCardsBoxShared
        upmdwidth="24%"
        data={blackCardsData}
        titlestart="OUR"
        titlehighlightedend="SOLUTIONS"
      />
    </>
  );
}
