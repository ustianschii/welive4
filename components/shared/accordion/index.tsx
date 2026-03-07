"use client";

import React, { useState } from "react";

import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";

import { AnswerContent, CustomAccordionProps } from "./types";
import { Container, Accordion, Question, Answer, Title } from "./styles";
import { SEPARATOR_BACKGROUND, GREEN } from "@/src/styles/constants";

export const CustomAccordion: React.FC<CustomAccordionProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedIndex(isExpanded ? index : false);
    };
  const renderAnswer = (answer: string | AnswerContent) => {
    if (typeof answer === "string") {
      return <Answer ml="20px">{answer}</Answer>;
    }

    return (
      <Box ml="20px">
        {answer.paragraphsBefore &&
          answer.paragraphsBefore.map((paragraph: string, idx: number) => (
            <Answer key={`para-before-${idx}`}>{paragraph}</Answer>
          ))}

        {answer.lists && (
          <Box
            component="ul"
            sx={{
              margin: "15px 0",
              paddingLeft: "0",
            }}
          >
            {answer.lists.map((item: string, idx: number) => (
              <Box
                component="li"
                key={`list-${idx}`}
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
                  style={{ marginRight: 12, color: GREEN, flexShrink: 0 }}
                />
                {item}
              </Box>
            ))}
          </Box>
        )}

        {answer.paragraphsAfter && (
          <>
            {Array.isArray(answer.paragraphsAfter) ? (
              answer.paragraphsAfter.map((paragraph: string, idx: number) => (
                <Answer key={`para-after-${idx}`}>{paragraph}</Answer>
              ))
            ) : (
              <Answer>{answer.paragraphsAfter}</Answer>
            )}
          </>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
      <Title>Frequently Asked Questions</Title>
      <Container disableGutters>
        {data.map((item, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Question isExpanded={expandedIndex === index}>
                {item.question}
              </Question>
            </AccordionSummary>
            <AccordionDetails>{renderAnswer(item.answer)}</AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};
