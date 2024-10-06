import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import "./globals.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
import { Analytics } from "../../components/analytics/analytics";
import Head from "next/head";

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
      <Head>
        <Analytics />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={"welive4"} />
        <meta
          name="description"
          content={
            "Business & Smart Home Automation Design, Installation and support."
          }
        />
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="logos/favicon.svg" type="image/svg+xml" /> */}
        <title>WeLive4</title>
      </Head>
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
