import { SEPARATOR_BACKGROUND } from "@/styles/constants";

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
        height="250px"
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Box display="flex" m="30px 0" justifyContent="space-between">
            <Typography fontFamily={opensans.style.fontFamily} fontSize="20px">
              <Highlighted mRight="0px">CLIENT</Highlighted> DETAILS
            </Typography>
          </Box>
        }
      />
      {children}
      <Footer />
    </>
  );
}
