import { Open_Sans, Raleway } from "next/font/google";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Footer } from "../../components/shared/footer";
import { GreenDivider } from "../../components/shared/green-divider";

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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer divider={<GreenDivider />} />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/48166700.js"
        ></script>
      </body>
    </html>
  );
}
