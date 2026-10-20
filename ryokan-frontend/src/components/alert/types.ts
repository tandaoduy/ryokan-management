import type { ReactNode } from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export type AlertProps = {
  variant?: AlertVariant;
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  closable?: boolean;
  align?: "center" | "start";
  onClose?: () => void;
  className?: string;
};

export type AlertContextValue = {
  defaultVariant: AlertVariant;
};
