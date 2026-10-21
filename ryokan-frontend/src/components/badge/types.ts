import type { ReactNode } from "react";

export type BadgeVariant = "neutral" | "info" | "success" | "warning" | "danger";
export type BadgeAppearance = "soft" | "solid" | "outline";
export type BadgeSize = "sm" | "md";
export type BadgeShape = "rounded" | "pill";

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  size?: BadgeSize;
  shape?: BadgeShape;
  icon?: ReactNode;
  dot?: boolean;
  loading?: boolean;
  href?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
};

export type BadgeContextValue = { defaultAppearance: BadgeAppearance };
