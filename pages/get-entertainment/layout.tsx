import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Subtitle } from "../../components/hero-title/styles";

export default function GetEntertainmentLayout({
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
        title={<Subtitle m="30px 0">ENTERTAINMENT</Subtitle>}
      />
      {children}
      <Footer />
    </>
  );
}
