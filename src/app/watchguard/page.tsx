import { Box } from "@mui/material";

import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import { watchGuardData } from "@/components/shared/gray-cards/data";
import { Header } from "@/components/shared/header";
import { CustomButton } from "@/components/shared/header-button";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { metadata } from "@/src/app/metadata";

export default function Watchguard() {
  return (
    <>
      <Meta
        title={metadata.Watchguard.title}
        description={metadata.Watchguard.description}
        keywords={metadata.Watchguard.keywords}
      />
      <Header
        layout={{
          tabletHeight: "700px",
          desktopHeight: "620px",
        }}
        background={{
          background: `url('watchguard/phone/header-bg.jpg')`,
          tabletBackground: `url('watchguard/desktop/header-bg.jpg')`,
          desktopBackground: `url('watchguard/desktop/header-bg.jpg')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                AUTOMATED <Highlighted>WATCHGUARD</Highlighted>
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: [
            "At WE LIVE 4, your safety is always on. Powered by Loxone, the Automated Watchguard monitors intrusions, hazards, leaks, and access — reacting instantly with alerts, lights, and emergency contact.",
            "Stay protected with smart, seamless integration. Control everything remotely, simulate presence, and enjoy real-time updates — no internet required. Trust us to guard what matters most.",
          ],
          button: <CustomButton text={"GET A FREE QUOTE!"} />,
          divider: true,
        }}
      />

      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox data={watchGuardData} imgheight={300} imgwidth={450} />
      </Box>
    </>
  );
}
