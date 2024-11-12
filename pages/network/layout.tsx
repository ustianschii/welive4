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

export default function NetworkLayout({
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
              <Highlighted>
                PROFESSIONAL <br />
              </Highlighted>
              NETWORK INSTALLATION
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/network/header-bg.png')`}
        tabletbackground={`url('/network/tablet/header-bg.png')`}
        desktopbackground={`url('/network/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="YOUR DEVICES. YOUR NEEDS. YOUR PERFECT NETWORK" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
