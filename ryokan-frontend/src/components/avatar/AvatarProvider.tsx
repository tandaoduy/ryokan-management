"use client";
import { createContext, type ReactNode } from "react";
import type { AvatarContextValue, AvatarSize } from "./types";
export const AvatarContext = createContext<AvatarContextValue | null>(null);
export function AvatarProvider({ children, defaultSize = "md" }: { children: ReactNode; defaultSize?: AvatarSize }) { return <AvatarContext.Provider value={{ defaultSize }}>{children}</AvatarContext.Provider>; }
