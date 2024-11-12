import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";

export default function OutdoorLayout({
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
              <Highlighted>PREMIUM OUTDOOR</Highlighted>
              TV MOUNTING
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/outdoor-tv/header-bg.png')`}
        tabletbackground={`url('/outdoor-tv/tablet/header-bg.png')`}
        desktopbackground={`url('/outdoor-tv/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="AVAILABLE IN NEW JERSEY, PENNSILVANIA & DELAWARE" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
