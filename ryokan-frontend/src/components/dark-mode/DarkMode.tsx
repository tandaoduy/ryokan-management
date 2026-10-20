"use client";

import { useDarkMode } from "./dark-mode.hook";
import type { DarkModeProps } from "./types";

export function DarkMode({ className = "", showLabel = true }: DarkModeProps) {
  const { theme, toggleTheme } = useDarkMode(); const isDark = theme === "dark"; const label = isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
  return <button type="button" onClick={toggleTheme} aria-label={label} title={label} className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 ${className}`}><span className={`relative flex h-7 w-14 items-center rounded-full p-1 transition-colors ${isDark ? "bg-indigo-600" : "bg-slate-200"}`}><span className={`flex size-5 items-center justify-center rounded-full bg-white text-amber-500 shadow-sm transition-transform duration-300 ${isDark ? "translate-x-7 text-indigo-600" : "translate-x-0"}`}>{isDark ? <MoonIcon /> : <SunIcon />}</span></span>{showLabel && <span className="pr-2">{isDark ? "Tối" : "Sáng"}</span>}</button>;
}
function SunIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-3.5"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.72 5.28l-1.42 1.42M6.7 17.3l-1.42 1.42M18.72 18.72l-1.42-1.42M6.7 6.7 5.28 5.28" /></svg>; }
function MoonIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-3.5"><path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5 7 7 0 0 0 20.5 14.2Z" /></svg>; }
