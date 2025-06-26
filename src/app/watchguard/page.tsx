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

const Watchguard = () => {
  return (
    <>
      <Meta
        title="Automated Watchguard: Smart Security System Powered by Loxone"
        description="Experience 24/7 intelligent protection with the Automated Watchguard. Powered by Loxone, it detects threats, alerts you in real time, and responds instantly—all while integrating seamlessly with your smart home."
        keywords={[
          "smart home security",
          "automated security system",
          "Loxone security",
          "intelligent home monitoring",
          "remote security control",
          "real-time intrusion alerts",
          "smart alarm system",
          "home surveillance with Loxone",
          "automated threat detection",
          "presence simulation security",
          "smart home integration",
          "Telegram security alerts",
          "leak detection system",
          "pool maintenance automation",
          "automated irrigation control",
        ]}
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
};

export default Watchguard;
