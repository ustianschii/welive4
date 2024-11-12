import { BLACK } from "@/styles/constants";

import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { GreenDivider } from "../../components/shared/green-divider";

import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { opensans } from "@/app/layout";

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
        desktopheight="250px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={
          <Box
            display="flex"
            m="30px 0"
            justifyContent="space-between"
            p="0 20px"
          >
            <Typography fontFamily={opensans.style.fontFamily} fontSize="14px">
              SELECT DATE AND TIME
            </Typography>
            <Typography fontFamily={opensans.style.fontFamily} fontSize="14px">
              STANDART TIME (GMT +0)
            </Typography>
          </Box>
        }
      />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
