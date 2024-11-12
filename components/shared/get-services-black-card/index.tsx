import React from "react";

import { Box, List, Typography, IconButton, SvgIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import Image from "next/image";

import { GetServiceCardProps } from "./types";
import {
  Board,
  CardBox,
  ImageContainer,
  TextContainer,
  CardButtonsBox,
} from "./styles";
import { raleway } from "@/app/layout";
import { GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";

export const GetServiceCard: React.FC<GetServiceCardProps> = ({ data }) => {
  return (
    <>
      {data.map((service, index) => (
        <CardBox key={index}>
          <Board>
            {service.image && (
              <ImageContainer>
                <Image
                  src={service.image}
                  alt={service.name}
                  width={120}
                  height={100}
                />
              </ImageContainer>
            )}
            <TextContainer>
              <Typography
                fontFamily={raleway.style.fontFamily}
                fontSize="18px"
                fontWeight={SEMI_BOLD}
              >
                {service.name}
              </Typography>
            </TextContainer>
          </Board>
          <Box display="flex" flexDirection="column" width="100%">
            <List style={{ margin: "10px 0" }}>
              {service.features.map((feature, index) => (
                <Box key={index} display="flex">
                  <SvgIcon
                    style={{
                      color: WHITE,
                      fontSize: "5px",
                      margin: "13px 10px 0 0 ",
                    }}
                  >
                    <CircleIcon />
                  </SvgIcon>
                  <Typography
                    color={WHITE}
                    fontFamily={raleway.style.fontFamily}
                    fontSize="14px"
                    m="5px 0"
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </List>
          </Box>

          <CardButtonsBox display="flex" justifyContent="space-between">
            <IconButton disabled>
              <Image
                src={service.durationicon}
                alt="Duration icon"
                width={50}
                height={50}
              />
            </IconButton>

            {service.priceicon && (
              <IconButton disabled>
                <Image
                  src={service.priceicon}
                  alt="Price icon"
                  width={100}
                  height={50}
                />
              </IconButton>
            )}
            <Typography
              color={GRAY}
              fontFamily={raleway.style.fontFamily}
              fontSize="9px"
              display="flex"
              alignItems="center"
              p="0 5px"
            >
              * Sales tax is subject to additional charges
            </Typography>
            <IconButton>
              <Image
                src="/get-services/add-to-cart.svg"
                alt="cart-icon"
                width={50}
                height={50}
              />
            </IconButton>
          </CardButtonsBox>
        </CardBox>
      ))}
    </>
  );
};
