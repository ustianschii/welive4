import { BLACK } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        mobileheight="250px"
        tabletheight="300px"
        desktopheight="300px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle sx={{ marginTop: "100px" }}>
            <Highlighted>YOUR</Highlighted>CHOICE
          </Subtitle>
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
