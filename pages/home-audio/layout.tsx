import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";
import { GreenDivider } from "../../components/shared/green-divider";

export default function HomeAudioLayout({
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
            WHOLE
            <Highlighted>
              HOME <br />
              AUDIO
            </Highlighted>
            SYSTEMS
          </Subtitle>
        }
        background={`url('/home-audio/header-bg.svg')`}
        height="775px"
        subtitle={
          <HeaderSubtitle first="STREAMING YOUR FAVORITE SONGS IN EVERY CORNER OF YOUR HOME!" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
