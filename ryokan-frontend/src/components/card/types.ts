import type { ReactNode } from "react";

export type CardVariant = "default" | "elevated" | "outlined" | "filled" | "interactive";

export type CardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  actions?: ReactNode;
  variant?: CardVariant;
};
export type CardContextValue = { defaultClassName: string };
