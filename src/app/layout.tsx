import { Open_Sans, Raleway } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// import { Header } from "../../components/shared/header";
// import { HeroTitle } from "../../components/hero-title";
// import { CustomButton } from "../../components/shared/header-button";
import { Footer } from "../../components/shared/footer";
import { GreenDivider } from "../../components/shared/green-divider";

import theme from "../styles/theme";
import { Meta } from "../../components/meta";
// import Head from "next/head";

export const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head> */}
      <Meta />
      {/* </head> */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer divider={<GreenDivider />} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
