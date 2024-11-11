import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

export default function GameMediaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <Subtitle>
            CUSTOMIZED
            <Highlighted>GAME & MEDIA</Highlighted>
            ROOM INSTALLATION
          </Subtitle>
        }
        background={`url('/game-media/header-bg.png')`}
        tabletbackground={`url('/game-media/tablet/header-bg.png')`}
        desktopbackground={`url('/game-media/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="CREATE YOUR PERFECT GAMING AND MEDIA ZONE WITH OUR CUSTOM-DESIGNED SYSTEMS" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
