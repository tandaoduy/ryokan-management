"use client";

import { useEffect, useState } from "react";
import type { ToastPosition, ToastProps, ToastVariant } from "./types";

function getPositionClasses(position?: ToastPosition): string {
  if (!position) return "";
  switch (position) {
    case "top-left":
      return "fixed top-5 left-5 z-50";
    case "top-right":
      return "fixed top-5 right-5 z-50";
    case "bottom-left":
      return "fixed bottom-5 left-5 z-50";
    case "bottom-right":
      return "fixed bottom-5 right-5 z-50";
    case "top-center":
      return "fixed top-5 left-1/2 -translate-x-1/2 z-50";
    case "bottom-center":
      return "fixed bottom-5 left-1/2 -translate-x-1/2 z-50";
    default:
      return "";
  }
}

function getDefaultIcon(variant: ToastVariant) {
  switch (variant) {
    case "success":
      return (
        <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-emerald-600 bg-emerald-50 rounded-lg dark:bg-emerald-950/60 dark:text-emerald-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
      );
    case "danger":
      return (
        <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-rose-600 bg-rose-50 rounded-lg dark:bg-rose-950/60 dark:text-rose-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Error icon</span>
        </div>
      );
    case "warning":
      return (
        <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-amber-600 bg-amber-50 rounded-lg dark:bg-amber-950/60 dark:text-amber-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="sr-only">Warning icon</span>
        </div>
      );
    case "default":
      return (
        <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-indigo-600 bg-indigo-50 rounded-lg dark:bg-indigo-950/60 dark:text-indigo-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );
    case "info":
    default:
      return (
        <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-indigo-600 bg-indigo-50 rounded-lg dark:bg-indigo-950/60 dark:text-indigo-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="sr-only">Info icon</span>
        </div>
      );
  }
}

export function Toast({
  title,
  children,
  variant = "info",
  icon,
  avatar,
  dismissible = true,
  onDismiss,
  position,
  duration,
  undoText,
  onUndo,
  actionText,
  actionHref,
  onAction,
  actionIcon,
  cancelText,
  onCancel,
  progress,
  timeAgo,
  badgeText,
  fullAlert = false,
  className = "",
}: ToastProps) {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (!duration || duration <= 0) return;
    const timer = setTimeout(() => {
      setShown(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!shown) return null;

  const handleDismiss = () => {
    setShown(false);
    onDismiss?.();
  };

  const positionClasses = getPositionClasses(position);

  // Full Alert Mode (solid warning/danger style)
  if (fullAlert) {
    const isDanger = variant === "danger";
    const alertColors = isDanger
      ? "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-900/60 dark:text-rose-200"
      : "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-900/60 dark:text-amber-200";

    const btnPrimary = isDanger
      ? "bg-rose-600 hover:bg-rose-700 text-white"
      : "bg-amber-600 hover:bg-amber-700 text-white";

    return (
      <div
        role="alert"
        className={`w-full max-w-sm p-4 rounded-2xl border shadow-lg ${alertColors} ${positionClasses} ${className}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {icon || getDefaultIcon(variant)}
            {title && <h3 className="font-semibold text-sm">{title}</h3>}
          </div>
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Đóng"
              className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {children && <div className="text-xs leading-relaxed mb-4">{children}</div>}

        {(actionText || cancelText) && (
          <div className="flex items-center gap-2">
            {actionText && (
              <button
                type="button"
                onClick={onAction}
                className={`inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-xl shadow-xs transition-colors ${btnPrimary}`}
              >
                {actionIcon && <span className="mr-1.5">{actionIcon}</span>}
                {actionText}
              </button>
            )}
            {cancelText && (
              <button
                type="button"
                onClick={onCancel || handleDismiss}
                className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-xl border border-current hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {cancelText}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // Multi-line card style (for notifications, interactive updates, progress, etc.)
  const isMultiLine = Boolean(badgeText || avatar || progress !== undefined || (actionText && cancelText));

  if (isMultiLine) {
    return (
      <div
        role="alert"
        className={`w-full max-w-xs p-4 rounded-2xl border border-slate-200/90 bg-white text-slate-800 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 ${positionClasses} ${className}`}
      >
        {/* Optional top badge */}
        {badgeText && (
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 py-1.5 px-2.5 rounded-lg mb-3">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {badgeText}
            </span>
          </div>
        )}

        <div className="flex items-start gap-3">
          {avatar ? (
            <div className="shrink-0 relative">
              {typeof avatar === "string" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatar} alt="Avatar" className="w-9 h-9 rounded-full object-cover" />
              ) : (
                avatar
              )}
            </div>
          ) : (
            (icon || getDefaultIcon(variant))
          )}

          <div className="flex-1 min-w-0">
            {title && (
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {title}
              </div>
            )}
            {children && (
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                {children}
              </div>
            )}
            {timeAgo && (
              <span className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 mt-1 block">
                {timeAgo}
              </span>
            )}
          </div>

          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Đóng thông báo"
              className="-mr-1.5 -mt-1 p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Progress bar if present */}
        {progress !== undefined && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              <span>Tiến trình</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>
        )}

        {/* Actions grid */}
        {(actionText || cancelText) && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {cancelText && (
              <button
                type="button"
                onClick={onCancel || handleDismiss}
                className="w-full py-1.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                {cancelText}
              </button>
            )}
            {actionText && (
              <button
                type="button"
                onClick={onAction}
                className="w-full inline-flex items-center justify-center py-1.5 px-3 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
              >
                {actionIcon && <span className="mr-1.5">{actionIcon}</span>}
                {actionText}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // Standard inline single-row toast
  return (
    <div
      role="status"
      className={`flex items-center w-full max-w-sm p-4 text-slate-700 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/5 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 transition-all ${positionClasses} ${className}`}
    >
      {/* Icon */}
      {icon || getDefaultIcon(variant)}

      {/* Content */}
      <div className="ms-3 text-sm font-normal flex-1">
        {title && <span className="font-semibold text-slate-900 dark:text-white mr-1.5">{title}</span>}
        {children}
      </div>

      {/* Undo Button */}
      {undoText && (
        <button
          type="button"
          onClick={onUndo}
          className="ms-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline"
        >
          {undoText}
        </button>
      )}

      {/* Action button if single action */}
      {actionText && (
        actionHref ? (
          <a
            href={actionHref}
            className="ms-2 inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            {actionText}
          </a>
        ) : (
          <button
            type="button"
            onClick={onAction}
            className="ms-2 inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            {actionText}
          </button>
        )
      )}

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Đóng thông báo"
          className="ms-auto -mx-1.5 -my-1.5 p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="sr-only">Đóng</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
