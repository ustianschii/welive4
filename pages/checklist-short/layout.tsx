import { SEPARATOR_BACKGROUND } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
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
          <Subtitle m="50px 0 30px 0">
            Fill up the<Highlighted> Smart Technology Checklist</Highlighted>
            below
          </Subtitle>
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
