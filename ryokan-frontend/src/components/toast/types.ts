import type { ReactNode } from "react";

export type ToastVariant = "info" | "success" | "warning" | "danger" | "default";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export interface ToastProps {
  title?: string;
  children?: ReactNode;
  variant?: ToastVariant;
  icon?: ReactNode;
  avatar?: string | ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  position?: ToastPosition;
  duration?: number;
  undoText?: string;
  onUndo?: () => void;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  actionIcon?: ReactNode;
  cancelText?: string;
  onCancel?: () => void;
  progress?: number; // 0 to 100
  timeAgo?: string;
  badgeText?: string;
  fullAlert?: boolean;
  className?: string;
}

export interface ToastContextValue {
  defaultVariant: ToastVariant;
  position?: ToastPosition;
}
