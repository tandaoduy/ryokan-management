/* eslint-disable @next/next/no-img-element -- Avatar accepts arbitrary local or remote image URLs. */
import type { AvatarProps } from "./types";

const sizeConfig = {
  xs: { avatar: "size-6 text-[10px]", status: "size-2.5" },
  sm: { avatar: "size-8 text-xs", status: "size-3" },
  md: { avatar: "size-10 text-sm", status: "size-3.5" },
  lg: { avatar: "size-12 text-base", status: "size-4" },
  xl: { avatar: "size-16 text-xl", status: "size-5" },
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

export function Avatar({ src, alt, name, size = "md", status, shape = "circle", className = "" }: AvatarProps) {
  const currentSize = sizeConfig[size];

  return (
    <span className={`relative inline-flex shrink-0 ${className}`} title={name}>
      <span className={`inline-flex ${currentSize.avatar} ${shapeClass[shape]} items-center justify-center overflow-hidden bg-indigo-100 font-semibold text-indigo-700 ring-1 ring-slate-200 dark:bg-indigo-300 dark:text-indigo-950 dark:ring-indigo-200/70 dark:shadow-sm dark:shadow-indigo-300/20`}>
        {src ? <img src={src} alt={alt ?? name ?? "Avatar"} className="size-full object-cover" /> : initials(name)}
      </span>
      {status && <span className={`absolute right-0 bottom-0 ${currentSize.status} rounded-full border-2 border-white dark:border-slate-900 ${statusColor[status]}`} aria-label={`Trạng thái: ${status}`} />}
    </span>
  );
}
