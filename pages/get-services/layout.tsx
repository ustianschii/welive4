import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";

export default function GetServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        height="250px"
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle m="30px 0">
            GET OUR<Highlighted>SERVICES</Highlighted>
          </Subtitle>
        }
      />
      {children}
      <Footer />
    </>
  );
}
