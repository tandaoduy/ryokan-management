import type { ReactNode } from "react";
import type { BreadcrumbProps } from "./types";

function HomeIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-4 shrink-0"><path d="m9.69 2.17-7 5.6A1.75 1.75 0 0 0 2 9.14v7.11c0 .97.78 1.75 1.75 1.75h4V12h4.5v6h4c.97 0 1.75-.78 1.75-1.75V9.14c0-.53-.24-1.04-.66-1.37l-7-5.6a.5.5 0 0 0-.64 0Z" /></svg>;
}

function ChevronIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 shrink-0"><path d="m7.5 4 5 6-5 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Breadcrumb({ items, variant = "default", separator, showHomeIcon = false, className = "" }: BreadcrumbProps) {
  const compact = variant === "compact";
  const surface = {
    default: "", compact: "",
    pill: "inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm shadow-slate-950/5 dark:border-slate-700 dark:bg-slate-900",
    solid: "inline-flex rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800/80",
  }[variant];
  const divider: ReactNode = separator ?? <ChevronIcon />;

  return <nav aria-label="Breadcrumb" className={`${surface} ${className}`}><ol className={`flex flex-wrap items-center text-slate-500 dark:text-slate-400 ${compact ? "gap-1 text-xs" : "gap-2 text-sm"}`}>{items.map((item, index) => {
    const current = index === items.length - 1;
    const icon = item.icon ?? (showHomeIcon && index === 0 ? <HomeIcon /> : undefined);
    const content = <><span className="inline-flex items-center gap-1.5">{icon}{item.label}</span>{item.badge}</>;
    return <li key={`${item.label}-${index}`} className={`flex items-center ${compact ? "gap-1" : "gap-2"}`}>{item.href && !current ? <a href={item.href} className="inline-flex items-center gap-1.5 font-medium transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:hover:text-indigo-300 dark:focus-visible:ring-offset-slate-950">{content}</a> : <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-100" aria-current={current ? "page" : undefined}>{content}</span>}{!current && <span aria-hidden="true" className="inline-flex text-slate-300 dark:text-slate-600">{divider}</span>}</li>;
  })}</ol></nav>;
}
