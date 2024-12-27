import { Open_Sans, Raleway } from "next/font/google";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import theme from "@/src/styles/theme";
import ChatWidget from "@/components/hiver";
import { Footer } from "@/components/shared/footer";
import { GreenDivider } from "@/components/shared/green-divider";
import { Analytics } from "@/components/analytics/analytics";
import ClientWrapper from "@/components/client-wrapper";

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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientWrapper>
              {children}
              <Footer divider={<GreenDivider />} />
            </ClientWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
