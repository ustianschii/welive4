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

export default function OutdoorEntertainmentLayout({
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
              <Highlighted>OUTDOOR ENTERTAINMENT</Highlighted> <br />
              SYSTEM INSTALLATION & DESIGN
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/outdoor-entertainment/header-bg.png')`}
        tabletbackground={`url('/outdoor-entertainment/tablet/header-bg.png')`}
        desktopbackground={`url('/outdoor-entertainment/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        subtitle={
          <HeaderSubtitle first="YOUR ONE-STOP SHOP FOR A PROFESSIONAL OUTDOOR ENTERTAINMENT SYSTEM INSTALLATION!" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
