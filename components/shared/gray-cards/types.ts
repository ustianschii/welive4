interface DescriptionPair {
  title?: string;
  description: string;
  listItems?: string[];
}

interface Column {
  title?: string;
  descriptions?: string[];
}

interface GrayCard {
  image?: string;
  imagetablet?: string;
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
  descriptionPairs?: DescriptionPair[];
  columns?: Column[];
  link?: string;
  reverseLayout?: boolean;
}

export interface GrayCardsBoxProps {
  data: GrayCard[];
  imgheight?: number;
  imgwidth?: number;
  button?: React.ReactNode;
}
