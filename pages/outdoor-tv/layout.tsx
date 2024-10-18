import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
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
          <Subtitle m="120px 0 0 0">
            <Highlighted>
              PREMIUM <br /> OUTDOOR
            </Highlighted>
            TV <br />
            MOUNTING
          </Subtitle>
        }
        background={`url('/outdoor-tv/outdoor-tv-bg.png')`}
        height="775px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="AVAILABLE IN NEW JERSEY, PENNSULVANIA & DELAWARE" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      {children}
      <Footer />
    </>
  );
}
