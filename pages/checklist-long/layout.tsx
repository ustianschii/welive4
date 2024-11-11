import { SEPARATOR_BACKGROUND } from "@/styles/constants";

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
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle>
            Fill up the<Highlighted>Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
        mobileheight="350px"
        tabletheight="300px"
        desktopheight="250px"
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
