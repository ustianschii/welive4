import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
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
          <Subtitle m="120px 0 0 0">
            PREMIUM
            <Highlighted>
              AUDIO
              <br />
              VISUAL
            </Highlighted>
            SYSTEMS <br />
            INSTALLATION
          </Subtitle>
        }
        background={`url('/audio-visual-systems/header-bg.png')`}
        height="775px"
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
