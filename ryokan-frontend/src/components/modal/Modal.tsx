"use client";

import { useEffect, useId } from "react";
import type { ModalProps, ModalTheme } from "./types";

const widths = { sm: "max-w-md", md: "max-w-xl", lg: "max-w-3xl" };
const variants = {
  reservation: "border-[#9A704A]/60 text-[#D9B98F]",
  welcome: "border-[#C36A52]/60 text-[#E69A86]",
  onsen: "border-[#628D7A]/60 text-[#9BC7B2]",
};
const themes: Record<ModalTheme, { overlay: string; panel: string; header: string; title: string; close: string; body: string; footer: string; divider: string }> = {
  dark: {
    overlay: "bg-[#090D0C]/80 backdrop-blur-sm",
    panel: "bg-[#1A211D] shadow-[0_28px_90px_rgba(0,0,0,0.6)]",
    header: "border-[#F7F3EB]/12",
    title: "text-[#F7F3EB]",
    close: "text-[#F7F3EB]/55 hover:bg-[#F7F3EB]/10 hover:text-[#F7F3EB]",
    body: "text-[#F7F3EB]/75",
    footer: "bg-[#111713]/50",
    divider: "border-[#F7F3EB]/12",
  },
  light: {
    overlay: "bg-[#242521]/55 backdrop-blur-sm",
    panel: "bg-[#F7F3EB] shadow-[0_28px_90px_rgba(36,37,33,0.3)]",
    header: "border-[#9A704A]/30",
    title: "text-[#242521]",
    close: "text-[#242521]/55 hover:bg-[#9A704A]/10 hover:text-[#242521]",
    body: "text-[#242521]/75",
    footer: "bg-[#EEE7DB]",
    divider: "border-[#9A704A]/30",
  },
};

function JapanLandmark() {
  return (
    <svg viewBox="0 0 360 160" className="size-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="274" cy="38" r="25" fill="#C36A52" stroke="none" />
      <path d="M14 138c47-8 78-50 112-105 9-14 16-23 23-23 8 0 16 13 25 27 31 52 61 92 124 101" strokeWidth="2.2" />
      <path d="m126 33 23-23 23 31-15-6-8 10-10-10Z" fill="currentColor" fillOpacity="0.28" strokeWidth="1.4" />
      <path d="M0 139c33-10 65-10 98 0s65 10 98 0 65-10 98 0 45 10 66 3" strokeWidth="1.5" opacity="0.8" />
      <path d="M245 137V79M316 137V79M232 75c24-8 58-8 97 0M239 86c20-6 63-6 83 0M245 103h71M260 79v24M301 79v24" strokeWidth="2.4" />
      <path d="M25 47c24 1 41 12 62 31" strokeWidth="1.8" />
      <g fill="#C36A52" stroke="none"><circle cx="42" cy="47" r="4" /><circle cx="55" cy="55" r="3.5" /><circle cx="64" cy="39" r="4" /><circle cx="76" cy="63" r="3" /><circle cx="86" cy="72" r="3.5" /><circle cx="33" cy="62" r="3" /></g>
      <path d="M102 119c13-7 26-7 39 0M175 115c13-7 26-7 39 0" strokeWidth="1.3" opacity="0.8" />
    </svg>
  );
}

export function Modal({ open, onClose, title, children, footer, size = "md", variant = "reservation", theme = "dark" }: ModalProps) {
  const titleId = useId();
  const style = variants[variant];
  const themeStyle = themes[theme];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button aria-label="Đóng hộp thoại" className={`absolute inset-0 ${themeStyle.overlay}`} onClick={onClose} />
      <div className={`relative w-full overflow-hidden rounded-2xl border ${widths[size]} ${style} ${themeStyle.panel}`}>
        <header className={`relative z-10 flex items-center justify-between border-b px-7 py-5 ${themeStyle.header}`}>
          <h2 id={titleId} className={`text-xl font-semibold tracking-tight ${themeStyle.title}`}>{title}</h2>
          <button type="button" onClick={onClose} className={`rounded-md p-2 text-xl leading-none transition ${themeStyle.close}`} aria-label="Đóng">
            ×
          </button>
        </header>
        <div className={`relative z-10 max-w-[62%] px-7 py-7 text-sm leading-7 ${themeStyle.body}`}>{children}</div>
        {footer && <footer className={`relative z-10 flex justify-end gap-3 border-t px-7 py-5 ${themeStyle.divider} ${themeStyle.footer}`}><div className="pointer-events-none absolute -right-8 bottom-full hidden h-28 w-[22rem] opacity-75 sm:block"><JapanLandmark /></div>{footer}</footer>}
      </div>
    </div>
  );
}
