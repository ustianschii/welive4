import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
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
        height="250px"
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={<Subtitle m="30px 0">Privacy Policy</Subtitle>}
      />
      {children}
      <Footer />
    </>
  );
}
