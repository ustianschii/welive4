import { CssBaseline } from "@mui/material";

import { Title } from "../../../components/shared/content-separator/styles";
import { Highlighted } from "../../../components/hero-title/styles";
import { Header } from "../../../components/shared/header";
import { Footer } from "../../../components/shared/footer";
import { GreenDivider } from "../../../components/shared/green-divider";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { Separator } from "../../../components/shared/gray-separator";
import { ArticleContainer, Container } from "../styles";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <Header divider={<GreenDivider />} backcolor={SEPARATOR_BACKGROUND} />
      <Separator height="100px" padding="30px 0">
        <Title>
          <Highlighted>BLOG</Highlighted>ABOUT
          <Highlighted>WE LIVE 4</Highlighted>
        </Title>
      </Separator>
      <Container>
        <ArticleContainer>{children}</ArticleContainer>
      </Container>
      <Footer divider={<GreenDivider />} />
    </>
  );
}
