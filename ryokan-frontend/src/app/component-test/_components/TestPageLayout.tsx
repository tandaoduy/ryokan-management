import Link from "next/link";
import type { ReactNode } from "react";
import { DarkMode } from "../../../components";

export function TestPageLayout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <main className="min-h-screen bg-slate-50 px-4 py-10 transition-colors dark:bg-slate-950 sm:px-8"><div className="mx-auto max-w-5xl"><div className="flex items-center justify-between gap-4"><Link href="/component-test" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">← Component playground</Link><DarkMode /></div><header className="mb-8 mt-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Component test</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h1><p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p></header>{children}</div></main>;
}
