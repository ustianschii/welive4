import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { GrayCardsBoxProps } from "./types";
import { CardBox, Container, Title, Description, Subtitle } from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { GREEN } from "@/styles/constants";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({
  data,
  imgheight,
  imgwidth,
  button,
}) => {
  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index}>
          {item.image && (
            <Image
              alt="service"
              src={item.image}
              height={imgheight}
              width={imgwidth}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginTop: "50px",
              }}
            />
          )}

          {(item.title && <Title>{item.title}</Title>) || (
            <Title>
              <Highlighted mLeft="0px" mRight="0px">
                {item.titlehighlightedstart}
              </Highlighted>
              {item.titlestart}
              <Highlighted mLeft="0px" mRight="0px">
                {item.titlehighlightedend}
              </Highlighted>
              {item.titleend}
            </Title>
          )}
          <Box m="0 40px 10px 40px">
            <Description>{item.maindescription}</Description>
            <Subtitle>{item.firsttitle}</Subtitle>
            <Description>{item.firstdescription}</Description>
            <Subtitle>{item.secondtitle}</Subtitle>
            <Description>{item.seconddescription}</Description>
            <Subtitle>{item.thirdtitle}</Subtitle>
            <Description>{item.thirddescription}</Description>
            {item.descriptions?.map((desc, index) => (
              <Description display="flex" alignItems="center" key={index}>
                <DoneIcon
                  fontSize="large"
                  style={{ marginRight: 8, color: GREEN }}
                />
                {desc}
              </Description>
            ))}
          </Box>
          {button}
        </CardBox>
      ))}
    </Container>
  );
};
