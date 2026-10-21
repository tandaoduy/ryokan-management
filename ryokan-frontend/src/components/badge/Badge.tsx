import type { BadgeAppearance, BadgeProps, BadgeVariant } from "./types";

const styles: Record<BadgeAppearance, Record<BadgeVariant, string>> = {
  soft: {
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    info: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
    danger: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  },
  solid: {
    neutral: "bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900",
    info: "bg-indigo-600 text-white", success: "bg-emerald-600 text-white", warning: "bg-amber-500 text-slate-950", danger: "bg-rose-600 text-white",
  },
  outline: {
    neutral: "border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-200",
    info: "border border-indigo-300 text-indigo-700 dark:border-indigo-500/60 dark:text-indigo-300",
    success: "border border-emerald-300 text-emerald-700 dark:border-emerald-500/60 dark:text-emerald-300",
    warning: "border border-amber-300 text-amber-800 dark:border-amber-500/60 dark:text-amber-300",
    danger: "border border-rose-300 text-rose-700 dark:border-rose-500/60 dark:text-rose-300",
  },
};

export function Badge({ children, variant = "neutral", appearance = "soft", className = "" }: BadgeProps) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold leading-none ${styles[appearance][variant]} ${className}`}>{children}</span>;
}
