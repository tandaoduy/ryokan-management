import type { ReactNode } from "react";

export type Theme = "light" | "dark";
export type DarkModeProps = { className?: string; showLabel?: boolean };
export type DarkModeProviderProps = { children: ReactNode; defaultTheme?: Theme };
export type DarkModeContextValue = { theme: Theme; toggleTheme: () => void; setTheme: (theme: Theme) => void };
