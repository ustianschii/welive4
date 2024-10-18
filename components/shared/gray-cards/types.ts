interface GrayCard {
  image: string;
  title: string;
  firstdescription: string;
  seconddescription: string;
}

export interface GrayCardsBoxProps {
  data: GrayCard[];
  imgheight: number;
  imgwidth: number;
}
