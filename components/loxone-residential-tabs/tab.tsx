import React from "react";

import Image from "next/image";

import { TabContentProps } from "./types";
import { ContentBox, Description, QuoteBox, Title } from "./styles";

export const TabContent: React.FC<TabContentProps> = ({
  image,
  title,
  firstdesc,
  seconddesc,
  thirddesc,
  quote,
}) => {
  return (
    <ContentBox>
      <Image
        alt="service-logo"
        src={image}
        width={388}
        height={280}
        style={{ borderRadius: "10px" }}
      />
      <Title>{title}</Title>
      <Description>{firstdesc}</Description>
      <Description>{seconddesc}</Description>
      <Description>{thirddesc}</Description>
      <QuoteBox>
        <Image
          alt="quote-logo"
          src="/loxone-residential/quote.png"
          width={50}
          height={40}
          style={{ marginBottom: "10px" }}
        />
        <Description>{quote}</Description>
      </QuoteBox>
    </ContentBox>
  );
};
