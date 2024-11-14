export interface FeatureItem {
  icon: string;
  title: string;
  features: string[];
}

export interface KeyFeaturesProps {
  data: FeatureItem[];
  flex: string;
  maxw: string;
  gap: string;
}
