import { SEPARATOR_BACKGROUND } from "@/styles/constants";

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
        mobileheight="250px"
        backcolor={SEPARATOR_BACKGROUND}
        dividerTop={<GreenDivider />}
        title={
          <Box
            display="flex"
            m="30px 0"
            justifyContent="space-between"
            p="0 10px"
          >
            <Typography fontFamily={opensans.style.fontFamily} fontSize="15px">
              SELECT DATE AND TIME
            </Typography>
            <Typography fontFamily={opensans.style.fontFamily} fontSize="15px">
              Standart Time (GMT +0)
            </Typography>
          </Box>
        }
      />
      {children}
      <Footer />
    </>
  );
}
