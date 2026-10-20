"use client";

import { createContext, type ReactNode } from "react";
import type { CardContextValue } from "./types";

export const CardContext = createContext<CardContextValue | null>(null);
export function CardProvider({ children, defaultClassName = "" }: { children: ReactNode; defaultClassName?: string }) {
  return <CardContext.Provider value={{ defaultClassName }}>{children}</CardContext.Provider>;
}
