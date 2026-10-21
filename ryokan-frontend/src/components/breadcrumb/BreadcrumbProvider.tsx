"use client";

import { createContext, type ReactNode } from "react";
import type { BreadcrumbContextValue, BreadcrumbVariant } from "./types";

export const BreadcrumbContext = createContext<BreadcrumbContextValue>({ defaultVariant: "default" });

export function BreadcrumbProvider({ children, defaultVariant = "default" }: { children: ReactNode; defaultVariant?: BreadcrumbVariant }) {
  return <BreadcrumbContext.Provider value={{ defaultVariant }}>{children}</BreadcrumbContext.Provider>;
}
