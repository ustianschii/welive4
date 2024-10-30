import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
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
          <Subtitle m="80px 0 80px 0">
            <Highlighted>
              OUTDOOR
              <br />
              ENTERTAINMENT <br />
            </Highlighted>
            SYSTEM <br />
            INSTALLATION & <br />
            DESIGN
          </Subtitle>
        }
        background={`url('/outdoor-entertainment/header-bg.png')`}
        height="775px"
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
