"use client";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
// import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css", prepend: true });

// const metadata: Metadata = {
//   title: "",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
