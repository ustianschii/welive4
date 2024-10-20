import React from "react";

import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { CustomAccordionProps } from "./types";
import { Container, Accordion, Question, Answer } from "./styles";

export const CustomAccordion: React.FC<CustomAccordionProps> = ({ data }) => {
  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Question>{item.question}</Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>{item.answer}</Answer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
