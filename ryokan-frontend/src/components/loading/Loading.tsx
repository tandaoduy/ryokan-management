import type { LoadingProps } from "./types";

const sizes = { sm: "size-4 border-2", md: "size-6 border-[3px]", lg: "size-10 border-4" };

export function Loading({ label = "Đang tải...", size = "md", className = "" }: LoadingProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm text-slate-600 ${className}`} role="status">
      <span className={`animate-spin rounded-full border-slate-200 border-t-indigo-600 ${sizes[size]}`} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
