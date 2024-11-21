import React from "react";

import Image from "next/image";

import { TabContentProps } from "./types";
import { ContentBox, Description, QuoteBox, Title } from "./styles";
import { Box } from "@mui/material";

export const TabContent: React.FC<TabContentProps> = ({
  image,
  title,
  descriptions,
  quote,
}) => {
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
