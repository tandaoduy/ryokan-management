"use client";

import { createContext, type ReactNode } from "react";
import type { ModalContextValue, ModalSize } from "./types";

export const ModalContext = createContext<ModalContextValue | null>(null);
export function ModalProvider({ children, defaultSize = "md" }: { children: ReactNode; defaultSize?: ModalSize }) {
  return <ModalContext.Provider value={{ defaultSize }}>{children}</ModalContext.Provider>;
}
