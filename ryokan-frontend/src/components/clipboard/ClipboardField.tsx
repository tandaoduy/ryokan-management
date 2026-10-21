"use client";

import { Clipboard } from "./Clipboard";
import type { ClipboardFieldProps } from "./types";

export function ClipboardField({ value, label, prefix, helperText, copyLabel = "Sao chép", className = "" }: ClipboardFieldProps) {
  return <div className={`w-full max-w-lg ${className}`}>{label && <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-100">{label}</label>}<div className="flex overflow-hidden rounded-lg shadow-sm"><>{prefix && <span className="inline-flex shrink-0 items-center border border-r-0 border-slate-300 bg-slate-100 px-3 text-sm font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">{prefix}</span>}</><input readOnly value={value} aria-label={label ?? "Nội dung để sao chép"} className="min-w-0 flex-1 border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" /><Clipboard value={value} label={copyLabel} showIcon className="!rounded-none !border-l-0 !shadow-none" /></div>{helperText && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>}</div>;
}
