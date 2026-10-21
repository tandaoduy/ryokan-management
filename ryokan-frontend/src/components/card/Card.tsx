import type { CardProps } from "./types";

const variantConfig = {
  default: {
    container: "border-slate-200/80 bg-white shadow-sm shadow-slate-950/5 dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-lg dark:shadow-black/20",
    divider: "border-slate-100 dark:border-slate-700/60",
  },
  elevated: {
    container: "border-transparent bg-white shadow-xl shadow-slate-950/10 dark:border-slate-700/30 dark:bg-slate-900 dark:shadow-2xl dark:shadow-black/35",
    divider: "border-slate-100 dark:border-slate-700/60",
  },
  outlined: {
    container: "border-slate-300 bg-transparent shadow-none dark:border-slate-600 dark:bg-transparent",
    divider: "border-slate-200 dark:border-slate-700",
  },
  filled: {
    container: "border-slate-100 bg-slate-100 shadow-none dark:border-slate-800 dark:bg-slate-800/80",
    divider: "border-slate-200/80 dark:border-slate-700/80",
  },
  interactive: {
    container: "border-slate-200 bg-white shadow-sm shadow-slate-950/5 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500/70 dark:hover:shadow-indigo-500/10",
    divider: "border-slate-100 dark:border-slate-700/60",
  },
};

export function Card({ children, className = "", title, description, actions, variant = "default", media, mediaPosition = "top" }: CardProps) {
  const currentVariant = variantConfig[variant];
  const horizontal = media && mediaPosition !== "top";
  const mediaClass = horizontal
    ? "min-h-40 shrink-0 overflow-hidden md:w-2/5"
    : "min-h-40 overflow-hidden";
  const content = <div className={`min-w-0 flex-1 p-5 ${horizontal ? "md:p-6" : ""}`}>
    {(title || description || actions) && (
      <div className={`mb-5 flex items-start justify-between gap-4 border-b pb-4 ${currentVariant.divider}`}>
        <div className="min-w-0">
          {title && <h2 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">{title}</h2>}
          {description && <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{description}</p>}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    )}
    {children}
  </div>;

  return (
    <section
      className={`rounded-2xl border transition-all duration-200 ${media ? "overflow-hidden" : ""} ${horizontal ? "flex flex-col md:flex-row" : ""} ${currentVariant.container} ${className}`}
    >
      {media && mediaPosition !== "right" && <div className={mediaClass}>{media}</div>}
      {content}
      {media && mediaPosition === "right" && <div className={mediaClass}>{media}</div>}
    </section>
  );
}
