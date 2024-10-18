export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabContentProps {
  image: string;
  title: string;
  firstdesc: string;
  seconddesc: string;
  thirddesc?: string;
  quote: string;
}
