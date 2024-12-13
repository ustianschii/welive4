"use client";

import { Open_Sans, Raleway } from "next/font/google";
import { usePathname } from "next/navigation";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import theme from "@/src/styles/theme";
import { HubSpotScript } from "@/components/hs-chatbot";
import { Footer } from "@/components/shared/footer";
import { GreenDivider } from "@/components/shared/green-divider";
import { Analytics } from "@/components/analytics/analytics";
import { HSAnalytics } from "@/components/hs-analytics/analytics";
import PageTransition from "@/components/page-transition";

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
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <Analytics />
        <HSAnalytics />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageTransition pathname={pathname}>
              {children}
              <Footer divider={<GreenDivider />} />
            </PageTransition>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <HubSpotScript />
      </body>
    </html>
  );
}
