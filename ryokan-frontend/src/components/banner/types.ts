import type { ReactNode } from "react";

export type BannerVariant = "brand" | "forest" | "sunrise" | "night";

export type BannerProps = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
  variant?: BannerVariant;
  action?: ReactNode;
  className?: string;
};
