import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { Highlighted, Subtitle } from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";

export default function ConsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <Subtitle m="130px 0 0 0 ">
            GET A
            <Highlighted>
              FREE <br /> CONSULTATION <br />
            </Highlighted>
            FOR YOUR
            <Highlighted>
              DREAM <br /> HOME!
            </Highlighted>
          </Subtitle>
        }
        background={`url('consultation/header-bg.png')`}
        tabletbackground={`url('consultation/tablet/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        divider={<GreenDivider />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
