"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { DarkModeContextValue, DarkModeProviderProps, Theme } from "./types";

const STORAGE_KEY = "ryokan-theme";
export const DarkModeContext = createContext<DarkModeContextValue | null>(null);

export function DarkModeProvider({ children, defaultTheme = "light" }: DarkModeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const applyTheme = useCallback((nextTheme: Theme) => setThemeState(nextTheme), []);
  const toggleTheme = useCallback(() => setThemeState((currentTheme) => currentTheme === "dark" ? "light" : "dark"), []);

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme: applyTheme, toggleTheme }), [applyTheme, theme, toggleTheme]);
  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
}
