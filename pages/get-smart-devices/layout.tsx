import { GET_SERVICES_BACKGROUND } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Subtitle } from "../../components/hero-title/styles";

export default function GetSmartDevicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        height="250px"
        backcolor={GET_SERVICES_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={<Subtitle m="30px 0">SMART DEVICES</Subtitle>}
      />
      {children}
      <Footer />
    </>
  );
}
