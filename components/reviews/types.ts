export interface ReviewType {
  name: string;
  text: string;
  rating: number;
}

export interface ReviewsProps {
  reviews: ReviewType[];
}
