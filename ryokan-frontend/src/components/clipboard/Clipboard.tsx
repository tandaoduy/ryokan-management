"use client";
import { useState } from "react";
import type { ClipboardProps } from "./types";
const styles = { default: "border border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700 focus-visible:ring-indigo-500", outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus-visible:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800", ghost: "border border-transparent text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500 dark:text-indigo-300 dark:hover:bg-indigo-500/10" };
const CopyIcon = () => <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><rect x="6" y="6" width="10" height="11" rx="1.5" /><path d="M14 6V4.5A1.5 1.5 0 0 0 12.5 3h-8A1.5 1.5 0 0 0 3 4.5v8A1.5 1.5 0 0 0 4.5 14H6" /></svg>;
const CheckIcon = () => <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="m4 10 3.5 3.5L16 5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export function Clipboard({ value, label = "Sao chép", copiedLabel = "Đã sao chép", variant = "default", size = "md", showIcon = true, iconOnly = false, title, onCopy, onError, className = "" }: ClipboardProps) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { if (!navigator.clipboard) throw new Error("Clipboard is unavailable"); await navigator.clipboard.writeText(value); setCopied(true); onCopy?.(value); window.setTimeout(() => setCopied(false), 1600); } catch { onError?.(); } };
  const padding = iconOnly ? "size-9 p-0" : size === "sm" ? "min-h-8 px-2.5 text-xs" : "min-h-10 px-3.5 text-sm";
  const accessibleLabel = copied ? copiedLabel : label;
  return <button type="button" onClick={copy} title={title ?? accessibleLabel} aria-label={iconOnly ? accessibleLabel : undefined} className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${padding} ${styles[variant]} ${className}`}>{showIcon && (copied ? <CheckIcon /> : <CopyIcon />)}{!iconOnly && <span>{accessibleLabel}</span>}</button>;
}
