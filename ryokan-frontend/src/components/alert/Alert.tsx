"use client";

import { useState } from "react";
import type { AlertProps, AlertVariant } from "./types";

export type { AlertProps, AlertVariant };

function InfoSymbol({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="6" r="2.2" />
      <rect x="10" y="10" width="4" height="9" rx="1.5" />
    </svg>
  );
}

function SuccessSymbol({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WarningSymbol({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="10.25" y="4.5" width="3.5" height="9" rx="1.5" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  );
}

function ErrorSymbol({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CloseIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const defaultSymbols: Record<AlertVariant, React.ReactNode> = {
  info: <InfoSymbol className="size-3.5" />,
  success: <SuccessSymbol className="size-3.5" />,
  warning: <WarningSymbol className="size-3.5" />,
  error: <ErrorSymbol className="size-3.5" />,
};

const variantStyles: Record<
  AlertVariant,
  {
    container: string;
    iconBg: string;
    iconRing: string;
    title: string;
  }
> = {
  info: {
    container: "border-sky-400 bg-sky-50/70",
    iconBg: "bg-sky-500",
    iconRing: "ring-sky-200/90",
    title: "text-sky-600",
  },
  success: {
    container: "border-emerald-400 bg-emerald-50/70",
    iconBg: "bg-emerald-500",
    iconRing: "ring-emerald-200/90",
    title: "text-emerald-600",
  },
  warning: {
    container: "border-amber-400 bg-amber-50/70",
    iconBg: "bg-amber-500",
    iconRing: "ring-amber-200/90",
    title: "text-amber-600",
  },
  error: {
    container: "border-rose-400 bg-rose-50/70",
    iconBg: "bg-rose-500",
    iconRing: "ring-rose-200/90",
    title: "text-rose-600",
  },
};

export function Alert({
  variant = "info",
  title,
  children,
  icon,
  badge,
  action,
  closable = true,
  align = "center",
  onClose,
  className = "",
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const currentStyle = variantStyles[variant];
  const renderedSymbol = icon !== undefined ? icon : defaultSymbols[variant];

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const alignClass = align === "start" ? "items-start" : "items-center";

  return (
    <div
      role="alert"
      className={`relative flex ${alignClass} gap-4 rounded-xl border p-4 sm:px-6 sm:py-4 transition-all duration-150 ${currentStyle.container} ${className}`}
    >
      {/* Halo Icon Badge */}
      {renderedSymbol && (
        <div className="shrink-0 flex items-center justify-center">
          <span
            className={`flex size-7 items-center justify-center rounded-full text-white ring-4 shadow-xs ${currentStyle.iconBg} ${currentStyle.iconRing}`}
            aria-hidden="true"
          >
            {renderedSymbol}
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        {(title || badge) && (
          <div className="flex flex-wrap items-center gap-2">
            {title && (
              <h3 className={`text-[15px] font-bold tracking-tight leading-snug ${currentStyle.title}`}>
                {title}
              </h3>
            )}
            {badge && (
              <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold text-slate-700 shadow-2xs border border-slate-200/60">
                {badge}
              </span>
            )}
          </div>
        )}
        {children && (
          <div className={`text-sm font-medium text-slate-700 leading-normal ${title ? "mt-0.5" : ""}`}>
            {children}
          </div>
        )}
        {action && <div className="mt-2.5 flex items-center gap-2">{action}</div>}
      </div>

      {/* Close Button */}
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="shrink-0 -mr-1 rounded-md p-1.5 text-slate-400 hover:text-slate-600 hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Đóng thông báo"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
