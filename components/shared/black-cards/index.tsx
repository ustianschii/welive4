import React from "react";

import {
  Card,
  Container,
  CardTitle,
  Description,
  Title,
  CardsBox,
} from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { BlackCardsBoxProps } from "./types";

import CircleIcon from "@mui/icons-material/Circle";

export const BlackCardsBoxShared: React.FC<BlackCardsBoxProps> = ({
  data,
  titlestart,
  titleend,
  titlehighlightedstart,
  titlehighlightedend,
  border,
  bgcolor,
}) => {
  return (
    <Container disableGutters>
      <Title>
        <Highlighted>{titlehighlightedstart}</Highlighted> <br />
        {titlestart}
        <Highlighted>{titlehighlightedend}</Highlighted>
        {titleend}
      </Title>
      <CardsBox>
        {data.map((item, index) => (
          <Card key={index} border={border ?? ""} bgcolor={bgcolor}>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.firstdescription}</Description>
            <Description>{item.seconddescription}</Description>
            <Description>{item.thirddescription}</Description>
            {item.descriptions?.map((desc, index) => (
              <Description display="flex" alignItems="top" key={index}>
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
        ))}
      </CardsBox>
    </Container>
  );
};
