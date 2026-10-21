import type { ReactNode } from "react";

export type DropdownPlacement =
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

export type DropdownVariant = "default" | "minimal" | "glass";

export type DropdownTriggerType = "click" | "hover";

export type DropdownChevronProps = {
  className?: string;
  open?: boolean;
};

export type DropdownProps = {
  trigger: ReactNode | ((props: { open: boolean }) => ReactNode);
  children: ReactNode;
  placement?: DropdownPlacement;
  align?: "left" | "right"; // Backward compatibility
  triggerType?: DropdownTriggerType;
  delay?: number; // Delay in ms for hover
  variant?: DropdownVariant;
  className?: string;
  menuClassName?: string;
  closeOnClickInside?: boolean;
};

export type DropdownItemProps = {
  children: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  description?: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  active?: boolean;
  className?: string;
};

export type DropdownHeaderProps = {
  children?: ReactNode;
  name?: string;
  email?: string;
  avatarUrl?: string;
  badge?: ReactNode;
  className?: string;
};

export type DropdownDividerProps = {
  className?: string;
};

export type DropdownCheckboxProps = {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  description?: string;
  disabled?: boolean;
  className?: string;
};

export type DropdownRadioProps = {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  description?: string;
  disabled?: boolean;
  className?: string;
};

export type DropdownToggleProps = {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  description?: string;
  disabled?: boolean;
  className?: string;
};

export type DropdownSubmenuProps = {
  label: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  placement?: "right-start" | "left-start";
  className?: string;
};
