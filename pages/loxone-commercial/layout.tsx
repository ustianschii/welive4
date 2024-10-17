import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";

export default function CommercialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <Subtitle m="50px 0 0 0">
            <Highlighted> LOXONE</Highlighted>FOR <br /> COMMERCIAL
          </Subtitle>
        }
        background={`url('/loxone-commercial/loxone-commercial-header-background-mobile.png')`}
        height="775px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Loxone links everything in your building, giving you flexibility and big energy savings. It's a game-changer for investors, operators, and users."
            second="With Loxone, enjoy rapid ROI as seen in a global franchise restaurant saving 14,000 kWh monthly – paying off the investment in less than a month. Transform your space with Loxone and experience intelligent building automation like never before."
          />
        }
      />
      {children}
      <Footer />
    </>
  );
}
