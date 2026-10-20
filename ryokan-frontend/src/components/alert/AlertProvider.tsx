"use client";

import { createContext, type ReactNode } from "react";
import type { AlertContextValue, AlertVariant } from "./types";

export const AlertContext = createContext<AlertContextValue | null>(null);

export function AlertProvider({ children, defaultVariant = "info" }: { children: ReactNode; defaultVariant?: AlertVariant }) {
  return <AlertContext.Provider value={{ defaultVariant }}>{children}</AlertContext.Provider>;
}
