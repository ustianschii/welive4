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
import { Meta } from "../../components/meta";

export default function AutomationLayout({
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
              Loxone Automation:
              <Highlighted>The New Future Of Smart Automation</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('loxone-automation/header-bg.png')`}
        tabletbackground={`url('loxone-automation/tablet/header-bg.png')`}
        desktopbackground={`url('loxone-automation/desktop/header-bg.png')`}
        mobileheight="800px"
        tabletheight="800px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Loxone, founded in 2009 and headquartered in Austria, is a prominent manufacturer of smart home automation solutions. Their commitment to innovation and excellence has positioned them as industry leaders in building smart home automation. "
            second="According to Keinberger, a key figure within the company, Loxone's vision revolves around making buildings not just smart, but intelligently responsive to occupants' needs. Because of this, Loxone is successful with over 200,000 projects in 100+ countries."
            third="Entering North America, Loxone US is believed to be one of the top market leaders delivering the finest smart home automation experience for customers."
          />
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
