import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

export default function HighPerformanceSoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <Subtitle m="120px 0 30px 0">
            <Highlighted>
              HIGH PERFORMANCE <br />
              SOUND
            </Highlighted>
            SYSTEM <br />
            INSTALLATION
          </Subtitle>
        }
        background={`url('/high-performance-sound/header-bg.png')`}
        tabletbackground={`url('/high-performance-sound/tablet/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        subtitle={
          <HeaderSubtitle first="FEEL EVERY NOTE, EVERY RUMBLE WITH WE LIVE 4 HIGH-FIDELITY SURROUNDSOUND SYSTEM" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
