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
          <Subtitle m="50px 0 0 0">
            <Highlighted>
              LOXONE FOR <br />
            </Highlighted>
            RESIDENTIAL
          </Subtitle>
        }
        background={`url('/loxone-residential/loxone-residential-bg.png')`}
        height="775px"
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
      <Footer />
    </>
  );
}
