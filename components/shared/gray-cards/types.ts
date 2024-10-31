interface GrayCard {
  image?: string;
  title?: string;
  maindescription?: string;
  firsttitle?: string;
  firstdescription?: string;
  seconddescription?: string;
  secondtitle?: string;
  thirddescription?: string;
  thirdtitle?: string;
  titlehighlightedstart?: string;
  titlestart?: string;
  titlehighlightedend?: string;
  titleend?: string;
  descriptions?: string[];
  link?: string;
}

export interface GrayCardsBoxProps {
  data: GrayCard[];
  imgheight?: number;
  imgwidth?: number;
  button?: React.ReactNode;
}
