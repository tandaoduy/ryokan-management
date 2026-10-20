"use client";

import { createContext, type ReactNode } from "react";
import type { LoadingContextValue, LoadingSize } from "./types";

export const LoadingContext = createContext<LoadingContextValue | null>(null);
export function LoadingProvider({ children, defaultSize = "md" }: { children: ReactNode; defaultSize?: LoadingSize }) {
  return <LoadingContext.Provider value={{ defaultSize }}>{children}</LoadingContext.Provider>;
}
