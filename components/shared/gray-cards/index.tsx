"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import Image from "next/image";

import { GrayCardsBoxProps } from "./types";
import {
  CardBox,
  Container,
  Title,
  Description,
  Subtitle,
  CardContent,
  ImageBox,
} from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { GREEN } from "@/src/styles/constants";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({ data, button }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index} index={index} reverseLayout={item.reverseLayout}>
          <ImageBox
            hasImage={Boolean(item.image || (isTablet && item.imagetablet))}
          >
            {item.image && (
              <Image
                alt="service"
                src={
                  isDesktop && isTablet && item.imagetablet
                    ? item.imagetablet
                    : item.image
                }
                fill
                sizes={`
    (max-width: 600px) 80vw,
    (max-width: 900px) 70vw,
    (max-width: 1200px) 350px,
    400px
  `}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow:
                    "5px 5px 30px rgba(0, 0, 0, 0.2), -5px -5px 30px rgba(0, 0, 0, 0.2)",
                }}
              />
            )}
          </ImageBox>

          <CardContent
            index={index}
            reverseLayout={item.reverseLayout}
            hasColumns={Boolean(item.columns)}
          >
            {(item.title && (
              <Title hasColumns={Boolean(item.columns)}>{item.title}</Title>
            )) || (
              <Title hasColumns={Boolean(item.columns)}>
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

            {item.columns ? (
              <>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "auto auto" },
                    gap: { xs: "20px", md: "60px" },
                    justifyContent: { xs: "stretch", md: "center" },
                    maxWidth: { md: "900px", lg: "1000px" },
                    margin: "0 auto",
                  }}
                >
                  {item.columns.map((column, colIndex) => (
                    <Box key={colIndex}>
                      {column.title && <Subtitle>{column.title}</Subtitle>}
                      {column.descriptions &&
                        column.descriptions.map((desc, descIndex) => (
                          <Description key={descIndex}>{desc}</Description>
                        ))}
                    </Box>
                  ))}
                </Box>
                {item.descriptions && (
                  <Box
                    sx={{
                      marginTop: { xs: "30px", md: "40px" },
                      paddingTop: { xs: "30px", md: "40px" },
                      borderTop: `2px solid ${GREEN}`,
                      width: "100%",
                    }}
                  >
                    {item.descriptions.map((desc, descIndex) => (
                      <Description key={descIndex}>{desc}</Description>
                    ))}
                  </Box>
                )}
              </>
            ) : (
              <>
                <Description>{item.maindescription}</Description>

                {item.descriptionPairs ? (
                  item.descriptionPairs.map((pair, pairIndex) => (
                    <React.Fragment key={pairIndex}>
                      <Subtitle>{pair.title}</Subtitle>
                      <Description>{pair.description}</Description>
                      {pair.listItems && (
                        <Box
                          component="ul"
                          sx={{ margin: "10px 0", paddingLeft: "0" }}
                        >
                          {pair.listItems.map((listItem, liIndex) => (
                            <Box
                              component="li"
                              key={liIndex}
                              sx={{
                                color: "white",
                                marginBottom: "8px",
                                fontFamily: "raleway",
                                display: "flex",
                                alignItems: "center",
                                listStyle: "none",
                              }}
                            >
                              <DoneIcon
                                fontSize="large"
                                style={{
                                  marginRight: 8,
                                  color: GREEN,
                                  flexShrink: 0,
                                }}
                              />
                              {listItem}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    <Subtitle>{item.firsttitle}</Subtitle>
                    <Description>{item.firstdescription}</Description>
                    <Subtitle>{item.secondtitle}</Subtitle>
                    <Description>{item.seconddescription}</Description>
                    <Subtitle>{item.thirdtitle}</Subtitle>
                    <Description>{item.thirddescription}</Description>
                  </>
                )}

                <Box>
                  {item.descriptions?.map((desc, descIndex) => (
                    <Description
                      display="flex"
                      alignItems="center"
                      key={descIndex}
                    >
                      <DoneIcon
                        fontSize="large"
                        style={{ marginRight: 8, color: GREEN }}
                      />
                      {desc}
                    </Description>
                  ))}
                </Box>
              </>
            )}

            {button}
          </CardContent>
        </CardBox>
      ))}
    </Container>
  );
};
