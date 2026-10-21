import type { ReactNode } from "react";

export type BadgeVariant = "neutral" | "info" | "success" | "warning" | "danger";
export type BadgeAppearance = "soft" | "solid" | "outline";

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  className?: string;
};
