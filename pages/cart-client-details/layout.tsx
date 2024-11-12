import { BLACK } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { opensans } from "@/app/layout";
import { Highlighted } from "../../components/hero-title/styles";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header
        mobileheight="200px"
        tabletheight="200px"
        desktopheight="200px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={
          <Box display="flex" m="30px 10px" justifyContent="space-between">
            <Typography fontFamily={opensans.style.fontFamily} fontSize="20px">
              <Highlighted mRight="0px">CLIENT</Highlighted> DETAILS
            </Typography>
          </Box>
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
