import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import { ContentBox, Description, QuoteBox, Title } from "./styles";

interface TabContentProps {
  image: string;
  title: string;
  descriptions: string[];
  quote: string;
}

export const TabContent = ({
  image,
  title,
  descriptions,
  quote,
}: TabContentProps) => {
  return (
    <ContentBox>
      <Image
        alt="service-logo"
        src={image}
        width={360}
        height={260}
        style={{ borderRadius: "10px" }}
        quality={100}
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Title>{title}</Title>
        {descriptions.map((desc, index) => (
          <Description key={index}>{desc}</Description>
        ))}

        <QuoteBox>
          <Image
            alt="quote-logo"
            src="/loxone-residential/quote.svg"
            width={50}
            height={40}
            style={{
              marginBottom: "10px",
            }}
            quality={100}
          />
          <Description>{quote}</Description>
        </QuoteBox>
      </Box>
    </ContentBox>
  );
};
