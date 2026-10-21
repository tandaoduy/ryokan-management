import type { ReactNode } from "react";

export type TabsVariant = "default" | "underline" | "pills" | "boxed" | "full-width";
export type TabsOrientation = "horizontal" | "vertical";
export type TabsColor = "brand" | "purple" | "emerald" | "amber" | "rose" | "dark";

export interface TabItem {
  id?: string;
  label: string;
  icon?: ReactNode;
  content?: ReactNode;
  badge?: ReactNode | string;
  badgeColor?: "default" | "brand" | "danger" | "success" | "warning";
  disabled?: boolean;
  href?: string;
}

// Backward compatibility alias
export type Tab = TabItem;

export interface TabsProps {
  tabs: TabItem[];
  variant?: TabsVariant;
  orientation?: TabsOrientation;
  color?: TabsColor;
  defaultTabId?: string;
  activeTabId?: string;
  onTabChange?: (tabId: string, index: number) => void;
  fullWidth?: boolean;
  activeClasses?: string;
  inactiveClasses?: string;
  className?: string;
  contentClassName?: string;
  tabListClassName?: string;
}

export interface TabsContextValue {
  defaultVariant: TabsVariant;
  color?: TabsColor;
  orientation?: TabsOrientation;
}
