export type AnswerContent = {
  paragraphsBefore?: string[];
  lists?: string[];
  paragraphsAfter?: string | string[];
};

type Item = {
  question: string;
  answer: string | AnswerContent;
};

export type CustomAccordionProps = {
  data: Item[];
};
