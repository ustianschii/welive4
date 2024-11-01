interface ServiceCard {
  image?: string;
  name: string;
  features: string[];
  durationicon: string;
  priceicon: string;
}

export interface GetServiceCardProps {
  data: ServiceCard[];
}
