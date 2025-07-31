import React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/material";

import {
  Card,
  Container,
  CardTitle,
  Description,
  Title,
  CardsBox,
} from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { BlackCardsBoxProps } from "./types";
import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";

export const BlackCardsBoxShared: React.FC<BlackCardsBoxProps> = ({
  data,
  titlestart,
  titleend,
  titlehighlightedstart,
  titlehighlightedend,
  border = "",
  bgcolor,
  upmdwidth,
}) => {
  return (
    <Box sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
      <Container maxWidth="lg" disableGutters>
        <Title>
          <Highlighted mLeft="5px" mRight="5px">
            {titlehighlightedstart}
          </Highlighted>{" "}
          <br />
          {titlestart}
          <Highlighted mRight="5px" mLeft="5px">
            {titlehighlightedend}
          </Highlighted>
          {titleend}
        </Title>
        <CardsBox>
          {data.map(
            ({
              title,
              firstdescription,
              seconddescription,
              thirddescription,
              descriptions,
            }) => (
              <Card
                key={title}
                border={border}
                bgcolor={bgcolor}
                upmdwidth={upmdwidth}
              >
                <CardTitle>{title}</CardTitle>
                <Description>{firstdescription}</Description>
                <Description>{seconddescription}</Description>
                <Description>{thirddescription}</Description>
                {descriptions?.map((desc) => (
                  <Description display="flex" alignItems="top" key={desc}>
                    <CircleIcon
                      style={{
                        marginRight: "15px",
                        fontSize: "8px",
                        marginTop: "7px",
                      }}
                    />
                    {desc}
                  </Description>
                ))}
              </Card>
            )
          )}
        </CardsBox>
      </Container>
    </Box>
  );
};
