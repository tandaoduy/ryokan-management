import type { ReactNode } from "react";

export type RatingSize = "sm" | "md" | "lg" | "xl";

export interface RatingProps {
  value?: number;
  max?: number;
  size?: RatingSize;
  interactive?: boolean;
  onChange?: (value: number) => void;
  showText?: boolean;
  text?: ReactNode;
  showCount?: boolean;
  count?: number;
  countHref?: string;
  onCountClick?: () => void;
  className?: string;
  starClassName?: string;
}

export interface RatingAdvancedDistribution {
  stars: number;
  percentage: number;
  count?: number;
}

export interface RatingAdvancedProps {
  rating: number;
  totalRatings: number;
  distribution: RatingAdvancedDistribution[];
  className?: string;
}

export interface RatingScoreCategory {
  label: string;
  score: number;
  maxScore?: number;
}

export interface RatingScoreProps {
  score: number;
  maxScore?: number;
  label?: string;
  totalReviews?: number;
  readAllReviewsHref?: string;
  onReadAllReviews?: () => void;
  categories: RatingScoreCategory[];
  className?: string;
}

export interface RatingCommentProps {
  author: {
    name: string;
    avatarUrl?: string;
    date?: string;
    joinedDate?: string;
  };
  rating: number;
  title?: string;
  content: ReactNode;
  helpfulCount?: number;
  onHelpful?: () => void;
  onReport?: () => void;
  className?: string;
}

export interface RatingReviewDetail {
  icon?: ReactNode;
  text: string;
}

export interface RatingReviewCardProps {
  author: {
    name: string;
    avatarUrl?: string;
    country?: string;
    countryFlag?: string;
  };
  details: RatingReviewDetail[];
  review: {
    date?: string;
    title: string;
    score: number;
    content: ReactNode;
  };
  helpfulCount?: number;
  onHelpful?: () => void;
  onNotHelpful?: () => void;
  className?: string;
}

export interface RatingContextValue {
  defaultSize: RatingSize;
}
