import type { BreadcrumbProps } from "./types";

export function Breadcrumb({ items, variant = "default", className = "" }: BreadcrumbProps) {
  const pill = variant === "pill";
  return <nav aria-label="Breadcrumb" className={`${pill ? "inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm shadow-slate-950/5 dark:border-slate-700 dark:bg-slate-900" : ""} ${className}`}><ol className={`flex items-center text-slate-500 dark:text-slate-400 ${variant === "compact" ? "gap-1 text-xs" : "gap-2 text-sm"}`}>{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2"><>{item.href ? <a href={item.href} className="transition hover:text-indigo-600 dark:hover:text-indigo-300">{item.label}</a> : <span className="font-semibold text-slate-800 dark:text-slate-100" aria-current="page">{item.label}</span>}</>{index < items.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">›</span>}</li>)}</ol></nav>;
}
