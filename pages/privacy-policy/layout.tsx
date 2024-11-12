import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";
import { BLACK } from "@/styles/constants";
import { Subtitle } from "../../components/hero-title/styles";

import CssBaseline from "@mui/material/CssBaseline";

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        mobileheight="300px"
        tabletheight="300px"
        desktopheight="300px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={<Subtitle>Privacy Policy</Subtitle>}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
