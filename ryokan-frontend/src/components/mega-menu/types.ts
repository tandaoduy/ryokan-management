import type { ReactNode } from "react";

export type MegaMenuVariant = "dropdown" | "full-width";

export interface MegaMenuItem {
  title: string | ReactNode;
  description?: string | ReactNode;
  href?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  onClick?: () => void;
}

export interface MegaMenuColumn {
  title?: string | ReactNode;
  items?: (MegaMenuItem | string)[];
  links?: string[]; // Backward compatibility
}

export interface MegaMenuCTA {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  customContent?: ReactNode;
}

export interface MegaMenuProps {
  label?: string | ReactNode;
  trigger?: ReactNode | ((props: { open: boolean }) => ReactNode);
  variant?: MegaMenuVariant;
  columns?: MegaMenuColumn[];
  cta?: ReactNode | MegaMenuCTA;
  children?: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
  menuClassName?: string;
}

export interface MegaMenuContextValue {
  defaultLabel: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}
