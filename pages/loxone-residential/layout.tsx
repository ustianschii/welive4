import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";

export default function ResidentialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <Subtitle>
            <Highlighted>LOXONE</Highlighted>
            FOR RESIDENTIAL
          </Subtitle>
        }
        background={`url('/loxone-residential/header-bg.png')`}
        tabletbackground={`url('/loxone-residential/tablet/header-bg.png')`}
        desktopbackground={`url('/loxone-residential/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Make your house a stylish and comfortable retreat. Everything can be controlled with a single touch or voice command, including the lights, music, and temperature"
            second="Experience the stars like never before with safe outdoor TV mounts. With automated security, you can relax and always feel at ease."
            third="With Loxone,  luxury living is redefined, enabling you to create the ideal atmosphere at all times. "
          />
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
