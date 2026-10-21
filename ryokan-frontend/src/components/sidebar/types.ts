import type { ReactNode } from "react";

export type SidebarVariant = "default" | "compact" | "dark" | "glass";

export interface SidebarSubItem {
  label: string;
  href?: string;
  active?: boolean;
  badge?: ReactNode | string;
  onClick?: () => void;
}

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  badge?: ReactNode | string;
  badgeColor?: "default" | "brand" | "danger" | "success" | "warning";
  subItems?: SidebarSubItem[];
  defaultExpanded?: boolean;
  onClick?: () => void;
}

export interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
  separator?: boolean;
}

export interface SidebarCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  icon?: ReactNode;
  onDismiss?: () => void;
}

export interface SidebarProps {
  items?: SidebarItem[];
  groups?: SidebarGroup[];
  brand?: ReactNode;
  brandLogo?: ReactNode | string;
  brandName?: string;
  brandHref?: string;
  cta?: ReactNode | SidebarCTA;
  variant?: SidebarVariant;
  collapsed?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  offCanvas?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface SidebarContextValue {
  defaultVariant: SidebarVariant;
  collapsed?: boolean;
}
