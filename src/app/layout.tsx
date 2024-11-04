import { Open_Sans, Raleway } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Header } from "../../components/shared/header";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button";
import { Footer } from "../../components/shared/footer";
import { GreenDivider } from "../../components/shared/green-divider";
import { Analytics } from "../../components/analytics/analytics";

import theme from "../styles/theme";

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
      <head>
        <Analytics />
        <title>We Live 4</title>
        <meta name="description" content="Experience smart technology" />
        <meta name="WeLive4" content="WeLive4" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header
              tabletbackground={`url('/header-mobile/tablet/header-bg.png')`}
              background={`url('/header-mobile/header-bg.png')`}
              title={<HeroTitle />}
              button={<CustomButton text={"GET A FREE QUOTE!"} />}
              divider={<GreenDivider />}
            />
            {children}
            <Footer divider={<GreenDivider />} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
