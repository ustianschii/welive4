import { Open_Sans, Raleway } from "next/font/google";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import theme from "@/src/styles/theme";
import { HubSpotScript } from "@/components/hs-chatbot";
import { Footer } from "@/components/shared/footer";
import { GreenDivider } from "@/components/shared/green-divider";
import { Analytics } from "@/components/analytics/analytics";
import { HSAnalytics } from "@/components/hs-analytics/analytics";

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
        <Analytics />
        <HSAnalytics />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer divider={<GreenDivider />} />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <HubSpotScript />
      </body>
    </html>
  );
}
