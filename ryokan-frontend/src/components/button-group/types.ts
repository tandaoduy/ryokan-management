import type { ReactNode } from "react";

export type ButtonGroupOrientation = "horizontal" | "vertical";
export type ButtonGroupProps = {
  children: ReactNode;
  orientation?: ButtonGroupOrientation;
  ariaLabel?: string;
  className?: string;
};

export type ButtonGroupContextValue = { defaultOrientation: ButtonGroupOrientation };
