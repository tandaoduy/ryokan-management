"use client";

import { createContext, type ReactNode } from "react";
import type { ClipboardContextValue, ClipboardVariant } from "./types";

export const ClipboardContext = createContext<ClipboardContextValue>({ defaultVariant: "default" });
export function ClipboardProvider({ children, defaultVariant = "default" }: { children: ReactNode; defaultVariant?: ClipboardVariant }) { return <ClipboardContext.Provider value={{ defaultVariant }}>{children}</ClipboardContext.Provider>; }
