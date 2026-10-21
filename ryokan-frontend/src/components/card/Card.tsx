import type { CardProps } from "./types";

export function Card({ children, className = "", title, description, actions }: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-950/5 transition-colors dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-lg dark:shadow-black/20 ${className}`}
    >
      {(title || description || actions) && (
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-700/60">
          <div className="min-w-0">
            {title && <h2 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">{title}</h2>}
            {description && <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{description}</p>}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
