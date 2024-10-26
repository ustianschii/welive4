import React from "react";

import { Title } from "../../components/shared/content-separator/styles";
import { Highlighted } from "../../components/hero-title/styles";
import { Separator } from "../../components/shared/gray-separator";
import BlogLayout from "./layout";
import { BlogArticles } from "../../components/blog-articles";

export default function Blog() {
  return (
    <BlogLayout>
      <Separator height="100px" padding="30px 0">
        <Title>
          <Highlighted>BLOG</Highlighted>ABOUT
          <Highlighted>WE LIVE 4</Highlighted>
        </Title>
      </Separator>
      <BlogArticles />
    </BlogLayout>
  );
}
