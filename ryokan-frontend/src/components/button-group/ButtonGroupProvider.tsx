"use client";

import { createContext, type ReactNode } from "react";
import type { ButtonGroupContextValue, ButtonGroupOrientation } from "./types";

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({ defaultOrientation: "horizontal" });

export function ButtonGroupProvider({ children, defaultOrientation = "horizontal" }: { children: ReactNode; defaultOrientation?: ButtonGroupOrientation }) {
  return <ButtonGroupContext.Provider value={{ defaultOrientation }}>{children}</ButtonGroupContext.Provider>;
}
