export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabContentProps {
  image: string;
  title: string;
  descriptions: string[];
  quote: string;
}
