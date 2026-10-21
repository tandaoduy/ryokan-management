import type { ReactNode } from "react";

export type CarouselVariant = "hero" | "card" | "minimal";
export type CarouselSize = "sm" | "md" | "lg";

export type CarouselProps = {
  items: ReactNode[];
  initialSlide?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  variant?: CarouselVariant;
  size?: CarouselSize;
  className?: string;
};
