"use client";

import { createContext, type ReactNode } from "react";
import type { ButtonContextValue, ButtonSize, ButtonVariant } from "./types";

export const ButtonContext = createContext<ButtonContextValue>({ defaultVariant: "primary", defaultSize: "md" });

export function ButtonProvider({ children, defaultVariant = "primary", defaultSize = "md" }: { children: ReactNode; defaultVariant?: ButtonVariant; defaultSize?: ButtonSize }) {
  return <ButtonContext.Provider value={{ defaultVariant, defaultSize }}>{children}</ButtonContext.Provider>;
}
