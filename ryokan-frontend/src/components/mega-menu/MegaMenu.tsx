"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type {
  MegaMenuCTA,
  MegaMenuItem,
  MegaMenuProps,
} from "./types";

export type { MegaMenuColumn, MegaMenuItem, MegaMenuCTA } from "./types";

// Animated chevron icon
function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  );
}

// Subcomponent: Individual MegaMenu item link
export function MegaMenuItemLink({ item }: { item: MegaMenuItem | string }) {
  if (typeof item === "string") {
    return (
      <a
        href="#"
        className="block text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
      >
        {item}
      </a>
    );
  }

  const { title, description, href = "#", icon, badge, onClick } = item;

  return (
    <a
      href={href}
      onClick={onClick}
      className="group -mx-2.5 flex items-start gap-3 rounded-xl p-2.5 transition duration-150 hover:bg-slate-50 dark:hover:bg-slate-800/60"
    >
      {icon && (
        <span className="mt-0.5 shrink-0 text-slate-400 transition group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400">
          {icon}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800 transition group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">
            {title}
          </span>
          {badge && <span>{badge}</span>}
        </div>
        {description && (
          <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}

// Subcomponent: CTA Box inside MegaMenu
export function MegaMenuCTABlock({ cta }: { cta: ReactNode | MegaMenuCTA }) {
  // If it's custom ReactNode (not an object with title/description)
  if (
    typeof cta !== "object" ||
    cta === null ||
    !("title" in cta || "description" in cta || "backgroundImage" in cta)
  ) {
    return (
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/40">
        {cta as ReactNode}
      </div>
    );
  }

  const {
    title,
    description,
    buttonText = "Tìm hiểu thêm",
    buttonHref = "#",
    onButtonClick,
    backgroundImage,
    customContent,
  } = cta as MegaMenuCTA;

  if (backgroundImage) {
    return (
      <div
        className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-lg"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.3)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {title && <h4 className="text-base font-bold text-white">{title}</h4>}
        {description && (
          <p className="mt-1.5 text-xs text-slate-200 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-4">
          <a
            href={buttonHref}
            onClick={onButtonClick}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 focus:outline-none"
          >
            {buttonText}
            <span>→</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/90 to-purple-50/50 p-6 dark:border-indigo-900/40 dark:from-indigo-950/40 dark:to-purple-950/20">
      <div>
        {title && (
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            {title}
          </h4>
        )}
        {description && (
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>
        )}
      </div>
      {customContent}
      <div className="mt-4">
        <a
          href={buttonHref}
          onClick={onButtonClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 transition hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {buttonText}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

// Main MegaMenu Component
export function MegaMenu({
  label = "Dịch vụ",
  trigger,
  variant = "dropdown",
  columns = [],
  cta,
  children,
  isOpen: controlledOpen,
  defaultOpen = false,
  onToggle,
  className = "",
  menuClassName = "",
}: MegaMenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const toggle = () => {
    const next = !open;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onToggle?.(next);
  };

  // Close on click outside and escape
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onToggle?.(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onToggle?.(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, isControlled, onToggle]);

  // Determine grid columns count
  const hasCta = Boolean(cta);
  const totalColCount = columns.length + (hasCta ? 1 : 0);
  const gridColsClass =
    totalColCount >= 4
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      : totalColCount === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : totalColCount === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1";

  // Trigger element
  const triggerEl = trigger ? (
    typeof trigger === "function" ? (
      trigger({ open })
    ) : (
      trigger
    )
  ) : (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${
        open
          ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      }`}
      aria-expanded={open}
      aria-haspopup="true"
    >
      <span>{label}</span>
      <ChevronDownIcon open={open} />
    </button>
  );

  return (
    <div
      ref={containerRef}
      className={`${
        variant === "full-width" ? "static" : "relative inline-block"
      } ${className}`}
    >
      <div onClick={trigger ? toggle : undefined} className="inline-block">
        {triggerEl}
      </div>

      {open && (
        <>
          {variant === "full-width" ? (
            /* Full Width Dropdown */
            <div
              className={`absolute left-0 right-0 z-40 mt-2 border-y border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-xl animate-in fade-in-0 duration-150 dark:border-slate-800 dark:bg-slate-900/95 ${menuClassName}`}
            >
              <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
                {children ? (
                  children
                ) : (
                  <div className={`grid gap-6 ${gridColsClass}`}>
                    {columns.map((col, idx) => (
                      <div key={idx} className="space-y-3">
                        {col.title && (
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {col.title}
                          </h4>
                        )}
                        <ul className="space-y-1">
                          {(col.items ?? col.links ?? []).map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <MegaMenuItemLink item={item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {cta && (
                      <div className="flex flex-col">
                        <MegaMenuCTABlock cta={cta} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Standard Floating Dropdown */
            <div
              className={`absolute left-0 z-40 mt-2 min-w-[38rem] max-w-4xl rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 dark:border-slate-800 dark:bg-slate-900/95 ${menuClassName}`}
            >
              {children ? (
                children
              ) : (
                <div className={`grid gap-6 ${gridColsClass}`}>
                  {columns.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      {col.title && (
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {col.title}
                        </h4>
                      )}
                      <ul className="space-y-1">
                        {(col.items ?? col.links ?? []).map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <MegaMenuItemLink item={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {cta && (
                    <div className="flex flex-col">
                      <MegaMenuCTABlock cta={cta} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
