import type { LoadingProps } from "./types";

const sizeConfig = {
  sm: { spinner: "size-5", dot: "size-1.5", distance: 8, text: "text-xs", gap: "gap-2" },
  md: { spinner: "size-8", dot: "size-2", distance: 13, text: "text-sm", gap: "gap-3" },
  lg: { spinner: "size-11", dot: "size-2.5", distance: 18, text: "text-base", gap: "gap-3.5" },
};

const dots = Array.from({ length: 8 });

export function Loading({
  label = "Đang tải...",
  size = "md",
  layout = "horizontal",
  className = "",
}: LoadingProps) {
  const currentSize = sizeConfig[size];
  const containerLayout =
    layout === "vertical"
      ? "flex flex-col items-center gap-2"
      : `inline-flex items-center ${currentSize.gap}`;

  return (
    <span
      className={`${containerLayout} font-medium text-slate-700 dark:text-slate-300 ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className={`relative block shrink-0 ${currentSize.spinner}`} aria-hidden="true">
        {dots.map((_, index) => (
          <span
            key={index}
            className={`loading-dot absolute top-1/2 left-1/2 block rounded-full bg-current ${currentSize.dot}`}
            style={{
              transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-${currentSize.distance}px)`,
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </span>

      {label && <span className={currentSize.text}>{label}</span>}
    </span>
  );
}
