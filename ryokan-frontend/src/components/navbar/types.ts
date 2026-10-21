import type { ReactNode } from "react";

export type NavbarVariant =
  | "default"
  | "solid"
  | "glass"
  | "dark"
  | "transparent";

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  dropdown?: ReactNode;
  badge?: ReactNode;
  icon?: ReactNode;
}

export interface NavbarProps {
  brand?: ReactNode;
  brandHref?: string;
  brandLogo?: string | ReactNode;
  brandName?: string;
  items?: NavItem[];
  children?: ReactNode;
  action?: ReactNode;
  search?: ReactNode | boolean;
  onSearch?: (query: string) => void;
  userMenu?: ReactNode;
  variant?: NavbarVariant;
  sticky?: boolean;
  fluid?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  className?: string;
  containerClassName?: string;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: (open: boolean) => void;
}

export interface NavbarBrandProps {
  href?: string;
  logo?: string | ReactNode;
  name?: string;
  children?: ReactNode;
  className?: string;
}

export interface NavbarCollapseProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export interface NavbarLinkProps {
  href?: string;
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface NavbarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export interface NavbarSubmenuProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

export interface NavbarContextValue {
  defaultVariant: NavbarVariant;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}
