import Link from "next/link";
import type { ReactNode } from "react";

export function TestPageLayout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8"><div className="mx-auto max-w-5xl"><Link href="/component-test" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">← Component playground</Link><header className="mb-8 mt-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Component test</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h1><p className="mt-2 text-slate-600">{description}</p></header>{children}</div></main>;
}
