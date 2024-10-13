import { LIGHT_GRAY } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";

import CssBaseline from "@mui/material/CssBaseline";
import { GreenDivider } from "../../components/shared/green-divider";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";

export default function ChecklistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        backcolor={LIGHT_GRAY}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle m="50px 0">
            Fill up the<Highlighted> Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
      />
      {children}
      <Footer />
    </>
  );
}
