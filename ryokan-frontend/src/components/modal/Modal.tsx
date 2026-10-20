"use client";

import { useEffect } from "react";
import type { ModalProps } from "./types";

const widths = { sm: "max-w-md", md: "max-w-xl", lg: "max-w-3xl" };

export function Modal({ open, onClose, title, children, footer, size = "md" }: ModalProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button aria-label="Đóng hộp thoại" className="absolute inset-0 bg-slate-950/45" onClick={onClose} />
      <div className={`relative w-full ${widths[size]} rounded-2xl bg-white shadow-2xl`}>
        <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 id="modal-title" className="text-lg font-semibold text-slate-900">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-lg px-2 py-1 text-xl leading-none text-slate-500 hover:bg-slate-100 hover:text-slate-900" aria-label="Đóng">
            ×
          </button>
        </header>
        <div className="px-6 py-5 text-sm leading-6 text-slate-600">{children}</div>
        {footer && <footer className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4">{footer}</footer>}
      </div>
    </div>
  );
}
