/* eslint-disable @next/next/no-img-element -- Avatar accepts arbitrary local or remote image URLs. */
import type { AvatarProps } from "./types";

const sizeConfig = {
  xs: { avatar: "size-6 text-[10px]", status: "size-3" },
  sm: { avatar: "size-8 text-xs", status: "size-3.5" },
  md: { avatar: "size-10 text-sm", status: "size-4" },
  lg: { avatar: "size-12 text-base", status: "size-4.5" },
  xl: { avatar: "size-16 text-xl", status: "size-5.5" },
};

const statusColor = {
  online: "bg-emerald-500",
  away: "bg-amber-400",
  busy: "bg-rose-500",
  offline: "bg-slate-400",
};

const shapeClass = { circle: "rounded-full", rounded: "rounded-xl", square: "rounded-md" };

function initials(name?: string) {
  return name?.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "?";
}

function PlaceholderIcon() { return <svg viewBox="0 0 20 20" fill="currentColor" className="size-[92%] text-slate-400 dark:text-slate-500" aria-hidden="true"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>; }

export function Avatar({ src, alt, name, size = "md", status, shape = "circle", fallback = "initials", bordered = false, tooltip, className = "" }: AvatarProps) {
  const currentSize = sizeConfig[size];

  return (
    <span className={`group relative inline-flex shrink-0 ${className}`}>
      <span className={`inline-flex ${currentSize.avatar} ${shapeClass[shape]} items-center justify-center overflow-hidden bg-indigo-100 font-semibold text-indigo-700 ${bordered ? "p-1 ring-2 ring-slate-300 dark:ring-slate-500" : "ring-1 ring-slate-200 dark:ring-indigo-200/70"} dark:bg-indigo-300 dark:text-indigo-950 dark:shadow-sm dark:shadow-indigo-300/20`}>
        {src ? <img src={src} alt={alt ?? name ?? "Avatar"} className={`${shapeClass[shape]} size-full object-cover`} /> : fallback === "icon" ? <PlaceholderIcon /> : initials(name)}
      </span>
      {status && <span className={`absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 ${currentSize.status} rounded-full border-2 border-white dark:border-slate-900 ${statusColor[status]}`} aria-label={`Trạng thái: ${status}`} />}
      {tooltip && <span role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">{tooltip}</span>}
    </span>
  );
}
