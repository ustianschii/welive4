import { CssBaseline } from "@mui/material";

import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { GreenDivider } from "../../components/shared/green-divider";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header divider={<GreenDivider />} backcolor={SEPARATOR_BACKGROUND} />
      {children}
      <Footer divider={<GreenDivider />} />
    </>
  );
}
