import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";

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
          <Subtitle m="50px 5px 0 5px">
            <Highlighted>
              Loxone Automation: <br /> The New Future Of <br /> Smart
              Automation
            </Highlighted>
          </Subtitle>
        }
        background={`url('loxone-automation/loxone-automation-background.png')`}
        height="775px"
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
