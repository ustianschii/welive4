import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../components/hero-title/styles";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

export default function AudioVisualSystemsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              PREMIUM
              <Highlighted>AUDIO VISUAL</Highlighted>
              SYSTEMS INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/audio-visual-systems/header-bg.png')`}
        tabletbackground={`url('/audio-visual-systems/tablet/header-bg.png')`}
        desktopbackground={`url('/audio-visual-systems/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="EXPERIENCE UNMATCHED AUDIO VISUAL EXCELLENCE ACROSS NEW JERSEY, PENNSYLVANIA AND DELAWARE" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
