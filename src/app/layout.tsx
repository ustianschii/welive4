"use client";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import "./globals.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
import { Meta } from "./head";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <Meta />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
