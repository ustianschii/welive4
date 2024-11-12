import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { CustomButton } from "../../components/shared/header-button";

export default function EnergyManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle>
              HOME & BUILDING
              <Highlighted>ENERGY MANAGEMENT SYSTEMS</Highlighted>
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/energy-management/header-bg.png')`}
        tabletbackground={`url('/energy-management/tablet/header-bg.png')`}
        desktopbackground={`url('/energy-management/desktop/header-bg.png')`}
        mobileheight="700px"
        tabletheight="700px"
        desktopheight="700px"
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle first="MAXIMIZE SAVINGS WHILE MINIMIZING ENVIRONMENTAL IMPACT - IT'S WE LIVE 4 WAY!" />
        }
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
