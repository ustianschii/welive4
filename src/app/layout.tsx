"use client";

import { Open_Sans, Raleway } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Header } from "../../components/shared/header";

import theme from "../styles/theme";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button";
import { Footer } from "../../components/shared/footer";

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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header
              title={<HeroTitle />}
              button={<CustomButton text={"GET A FREE QUOTE!"} />}
              background={`url('/header-mobile/hero-top.png')`}
            />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
