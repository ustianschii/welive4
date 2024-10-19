export interface BlackCard {
  title?: string;
  firsttitle?: string;
  firstdescription?: string;
  secondtitle?: string;
  seconddescription?: string;
  thirdtitle?: string;
  thirddescription?: string;
}

export interface BlackCardsBoxProps {
  data: BlackCard[];
  titlestart?: string;
  titleend?: string;
  titlehighlightedstart?: string;
  titlehighlightedend?: string;
}
