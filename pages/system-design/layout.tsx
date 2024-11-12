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

export default function SystemDesignLayout({
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
              SYSTEM
              <Highlighted>DESIGN</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('system-design/header-bg.png')`}
        tabletbackground={`url('system-design/tablet/header-bg.png')`}
        desktopbackground={`url('system-design/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="At WE LIVE 4, we're dedicated to your satisfaction, right from the beginning to the end. Our seamless design process ensures that your unique needs are met while also saving your valuable time and money."
            second="We believe in optimizing system performance to its fullest potential.  Trust us for expert advice and enjoy free consultations—we're here to turn your vision into reality!"
          />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
