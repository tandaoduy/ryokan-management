import type { ReactNode } from "react";

export type CardVariant = "default" | "elevated" | "outlined" | "filled" | "interactive";
export type CardMediaPosition = "top" | "left" | "right";

export type CardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  actions?: ReactNode;
  variant?: CardVariant;
  media?: ReactNode;
  mediaPosition?: CardMediaPosition;
};
export type CardContextValue = { defaultClassName: string };
