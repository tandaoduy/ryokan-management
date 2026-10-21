"use client";

import type { ButtonProps, ButtonAppearance, ButtonVariant } from "./types";

const solid: Record<ButtonVariant, string> = {
  primary: "border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700 focus-visible:ring-indigo-500",
  secondary: "border-slate-700 bg-slate-700 text-white hover:border-slate-800 hover:bg-slate-800 focus-visible:ring-slate-500 dark:border-slate-200 dark:bg-slate-200 dark:text-slate-900 dark:hover:border-white dark:hover:bg-white",
  success: "border-emerald-600 bg-emerald-600 text-white hover:border-emerald-700 hover:bg-emerald-700 focus-visible:ring-emerald-500",
  danger: "border-rose-600 bg-rose-600 text-white hover:border-rose-700 hover:bg-rose-700 focus-visible:ring-rose-500",
  warning: "border-amber-500 bg-amber-500 text-slate-950 hover:border-amber-600 hover:bg-amber-600 focus-visible:ring-amber-500",
  dark: "border-slate-900 bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-500 dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800",
};
const outline: Record<ButtonVariant, string> = {
  primary: "border-indigo-500 text-indigo-700 hover:bg-indigo-50 focus-visible:ring-indigo-500 dark:text-indigo-300 dark:hover:bg-indigo-500/15",
  secondary: "border-slate-300 text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800",
  success: "border-emerald-500 text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-500 dark:text-emerald-300 dark:hover:bg-emerald-500/15",
  danger: "border-rose-500 text-rose-700 hover:bg-rose-50 focus-visible:ring-rose-500 dark:text-rose-300 dark:hover:bg-rose-500/15",
  warning: "border-amber-500 text-amber-800 hover:bg-amber-50 focus-visible:ring-amber-500 dark:text-amber-300 dark:hover:bg-amber-500/15",
  dark: "border-slate-700 text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-500 dark:border-slate-400 dark:text-slate-100 dark:hover:bg-slate-800",
  ghost: "border-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800",
};
const soft: Record<ButtonVariant, string> = {
  primary: "border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus-visible:ring-indigo-500 dark:border-indigo-500/20 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25",
  secondary: "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
  success: "border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus-visible:ring-emerald-500 dark:border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25",
  danger: "border-rose-100 bg-rose-50 text-rose-700 hover:bg-rose-100 focus-visible:ring-rose-500 dark:border-rose-500/20 dark:bg-rose-500/15 dark:text-rose-300 dark:hover:bg-rose-500/25",
  warning: "border-amber-100 bg-amber-50 text-amber-800 hover:bg-amber-100 focus-visible:ring-amber-500 dark:border-amber-500/20 dark:bg-amber-500/15 dark:text-amber-300 dark:hover:bg-amber-500/25",
  dark: "border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800",
};
const gradient: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 focus-visible:ring-indigo-500",
  secondary: "border-transparent bg-gradient-to-r from-slate-600 to-slate-800 text-white hover:from-slate-700 hover:to-slate-900 focus-visible:ring-slate-500",
  success: "border-transparent bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 focus-visible:ring-emerald-500",
  danger: "border-transparent bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 focus-visible:ring-rose-500",
  warning: "border-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 hover:from-amber-500 hover:to-orange-600 focus-visible:ring-amber-500",
  dark: "border-transparent bg-gradient-to-r from-slate-700 to-slate-950 text-white hover:from-slate-800 hover:to-slate-950 focus-visible:ring-slate-500",
  ghost: "border-transparent bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300 focus-visible:ring-slate-400 dark:from-slate-800 dark:to-slate-700 dark:text-slate-100",
};
const appearances: Record<ButtonAppearance, Record<ButtonVariant, string>> = { solid, outline, soft, gradient };
const sizes = { xs: "min-h-7 px-2 text-xs", sm: "min-h-8 px-3 text-sm", md: "min-h-10 px-4 text-sm", lg: "min-h-11 px-5 text-base", xl: "min-h-12 px-6 text-base" };

export function Button({ children, variant = "primary", appearance = "solid", size = "md", pill = false, fullWidth = false, loading = false, leftIcon, rightIcon, href, disabled, className = "", type = "button", ...props }: ButtonProps) {
  const inactive = disabled || loading;
  const classes = `inline-flex items-center justify-center gap-2 border font-semibold leading-5 shadow-sm transition duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${pill ? "rounded-full" : "rounded-lg"} ${fullWidth ? "w-full" : ""} ${appearances[appearance][variant]} ${className}`;
  const content = <>{loading ? <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : leftIcon}{children}{!loading && rightIcon}</>;

  if (href) return <a href={href} aria-disabled={inactive || undefined} className={classes} onClick={inactive ? (event) => event.preventDefault() : undefined}>{content}</a>;
  return <button {...props} type={type} disabled={inactive} className={classes}>{content}</button>;
}
