import type { ReactNode } from "react";

export type PopoverPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type PopoverTriggerType = "click" | "hover";

export interface PopoverProps {
  trigger: ReactNode | ((props: { open: boolean }) => ReactNode);
  children?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  placement?: PopoverPlacement;
  triggerType?: PopoverTriggerType;
  showArrow?: boolean;
  offset?: number;
  delay?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  triggerClassName?: string;
  width?: string;
}

export interface PopoverContextValue {
  defaultPlacement: PopoverPlacement;
}
