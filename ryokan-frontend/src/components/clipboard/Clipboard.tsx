"use client";
import { useState } from "react";
import type { ClipboardProps } from "./types";
const styles = { default: "bg-indigo-600 text-white hover:bg-indigo-700", outline: "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800", ghost: "text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-500/10" };
export function Clipboard({ value, label = "Sao chép", copiedLabel = "Đã sao chép", variant = "default", className = "" }: ClipboardProps) { const [copied, setCopied] = useState(false); const copy = async () => { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }; return <button type="button" onClick={copy} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${styles[variant]} ${className}`}>{copied ? "✓ " : ""}{copied ? copiedLabel : label}</button>; }
