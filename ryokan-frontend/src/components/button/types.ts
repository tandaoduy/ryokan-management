import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "ghost";
export type ButtonAppearance = "solid" | "outline" | "soft" | "gradient";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  pill?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
};

export type ButtonContextValue = { defaultVariant: ButtonVariant; defaultSize: ButtonSize };
