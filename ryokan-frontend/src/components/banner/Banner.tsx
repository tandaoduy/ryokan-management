import type { BannerProps, BannerVariant } from "./types";

const style: Record<BannerVariant, { container: string; eyebrow: string; description: string }> = {
  brand: { container: "border border-indigo-200 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20", eyebrow: "text-indigo-100", description: "text-indigo-100" },
  forest: { container: "border border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20", eyebrow: "text-emerald-100", description: "text-emerald-100" },
  sunrise: { container: "border border-amber-200 bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 shadow-lg shadow-amber-500/20", eyebrow: "text-amber-900/70", description: "text-amber-950/75" },
  night: { container: "border border-slate-700 bg-slate-900 text-white shadow-lg shadow-slate-950/25 dark:border-slate-600", eyebrow: "text-slate-400", description: "text-slate-300" },
};

export function Banner({ title, eyebrow, children, variant = "brand", action, className = "" }: BannerProps) {
  const current = style[variant];
  return (
    <section className={`rounded-2xl p-6 sm:p-8 ${current.container} ${className}`}>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          {eyebrow && <p className={`text-xs font-bold uppercase tracking-[0.18em] ${current.eyebrow}`}>{eyebrow}</p>}
          <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
          {children && <div className={`mt-2 text-sm leading-6 ${current.description}`}>{children}</div>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </section>
  );
}
