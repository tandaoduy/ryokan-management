"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  DropdownCheckboxProps,
  DropdownChevronProps,
  DropdownDividerProps,
  DropdownHeaderProps,
  DropdownItemProps,
  DropdownPlacement,
  DropdownProps,
  DropdownRadioProps,
  DropdownSubmenuProps,
  DropdownToggleProps,
  DropdownVariant,
} from "./types";

interface DropdownContextValue {
  closeDropdown: () => void;
  closeOnClickInside: boolean;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function getPlacementClass(placement?: DropdownPlacement, align?: "left" | "right"): string {
  if (placement) {
    switch (placement) {
      case "top":
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "top-start":
        return "bottom-full left-0 mb-2";
      case "top-end":
        return "bottom-full right-0 mb-2";
      case "bottom":
        return "top-full left-1/2 -translate-x-1/2 mt-2";
      case "bottom-start":
        return "top-full left-0 mt-2";
      case "bottom-end":
        return "top-full right-0 mt-2";
      case "left":
        return "right-full top-1/2 -translate-y-1/2 mr-2";
      case "left-start":
        return "right-full top-0 mr-2";
      case "left-end":
        return "right-full bottom-0 mr-2";
      case "right":
        return "left-full top-1/2 -translate-y-1/2 ml-2";
      case "right-start":
        return "left-full top-0 ml-2";
      case "right-end":
        return "left-full bottom-0 ml-2";
    }
  }

  // Fallback to align prop
  return align === "right" ? "top-full right-0 mt-2" : "top-full left-0 mt-2";
}

function getSurfaceClass(variant: DropdownVariant = "default"): string {
  switch (variant) {
    case "glass":
      return "rounded-2xl border border-white/40 bg-white/85 p-1.5 shadow-2xl shadow-slate-950/15 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/85 dark:shadow-black/50";
    case "minimal":
      return "rounded-xl border border-slate-200 bg-white p-1 shadow-md shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900";
    case "default":
    default:
      return "rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-xl shadow-slate-950/10 dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-black/40";
  }
}

export function DropdownChevron({
  className = "",
  open,
}: DropdownChevronProps) {
  return (
    <svg
      className={`size-4 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      } ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  );
}

export function Dropdown({
  trigger,
  children,
  placement,
  align = "left",
  triggerType = "click",
  delay = 200,
  variant = "default",
  className = "",
  menuClassName = "",
  closeOnClickInside = true,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeDropdown = () => setOpen(false);

  const handleMouseEnter = () => {
    if (triggerType === "hover") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerType === "hover") {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, delay);
    }
  };

  const handleTriggerClick = () => {
    if (triggerType === "click") {
      setOpen((prev) => !prev);
    }
  };

  // Close on click outside and escape
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const placementClass = getPlacementClass(placement, align);
  const surfaceClass = getSurfaceClass(variant);

  return (
    <DropdownContext.Provider value={{ closeDropdown, closeOnClickInside }}>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-block ${open ? "z-40" : ""} ${className}`}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={handleTriggerClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((prev) => !prev);
            }
          }}
          className="inline-block cursor-pointer outline-none"
          aria-haspopup="true"
          aria-expanded={open}
        >
          {typeof trigger === "function" ? trigger({ open }) : trigger}
        </div>

        {open && (
          <div
            role="menu"
            className={`absolute z-50 min-w-52 transition-all animate-in fade-in-0 zoom-in-95 duration-150 ${placementClass} ${surfaceClass} ${menuClassName}`}
          >
            {children}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownItem({
  children,
  icon,
  badge,
  description,
  href,
  onClick,
  disabled = false,
  destructive = false,
  active = false,
  className = "",
}: DropdownItemProps) {
  const context = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
    if (context?.closeOnClickInside) {
      context.closeDropdown();
    }
  };

  const baseStyle =
    "group flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition duration-150 outline-none";

  const stateStyle = disabled
    ? "opacity-40 cursor-not-allowed pointer-events-none"
    : destructive
    ? "text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40"
    : active
    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300 font-semibold"
    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white";

  const content = (
    <>
      <div className="flex items-center gap-2.5 min-w-0">
        {icon && (
          <span className="shrink-0 text-slate-400 transition-colors group-hover:text-current dark:text-slate-500">
            {icon}
          </span>
        )}
        <div className="truncate">
          <div>{children}</div>
          {description && (
            <div className="text-xs font-normal text-slate-400 dark:text-slate-500 mt-0.5">
              {description}
            </div>
          )}
        </div>
      </div>
      {badge && <span className="shrink-0 ml-2">{badge}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${baseStyle} ${stateStyle} ${className}`}
        role="menuitem"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`${baseStyle} ${stateStyle} ${className}`}
      role="menuitem"
    >
      {content}
    </button>
  );
}

export function DropdownHeader({
  children,
  name,
  email,
  avatarUrl,
  badge,
  className = "",
}: DropdownHeaderProps) {
  if (name || email) {
    return (
      <div className={`p-2.5 mb-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 ${className}`}>
        <div className="flex items-center gap-2.5">
          {avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={avatarUrl}
              alt={name || "User avatar"}
              className="size-9 rounded-full object-cover shrink-0 ring-1 ring-slate-200 dark:ring-slate-700"
            />
          ) : (
            <div className="size-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm shadow-indigo-600/30">
              {name ? name.slice(0, 2).toUpperCase() : "US"}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                {name}
              </span>
              {badge && <span>{badge}</span>}
            </div>
            {email && (
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {email}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 ${className}`}>
      {children}
    </div>
  );
}

export function DropdownDivider({ className = "" }: DropdownDividerProps) {
  return <div className={`my-1 border-t border-slate-100 dark:border-slate-800 ${className}`} role="separator" />;
}

export function DropdownCheckbox({
  label,
  checked,
  defaultChecked,
  onChange,
  description,
  disabled = false,
  className = "",
}: DropdownCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  return (
    <label
      className={`flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
      />
      <div className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          {label}
        </span>
        {description && (
          <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {description}
          </span>
        )}
      </div>
    </label>
  );
}

export function DropdownRadio({
  name,
  label,
  value,
  checked,
  defaultChecked,
  onChange,
  description,
  disabled = false,
  className = "",
}: DropdownRadioProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = () => {
    if (disabled) return;
    if (checked === undefined) {
      setInternalChecked(true);
    }
    onChange?.(value);
  };

  return (
    <label
      className={`flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="mt-0.5 size-4 border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
      />
      <div className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          {label}
        </span>
        {description && (
          <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {description}
          </span>
        )}
      </div>
    </label>
  );
}

export function DropdownToggle({
  label,
  checked,
  defaultChecked,
  onChange,
  description,
  disabled = false,
  className = "",
}: DropdownToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  return (
    <div
      onClick={handleToggle}
      className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer select-none ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${className}`}
    >
      <div className="min-w-0 flex-1 mr-3">
        <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          {label}
        </span>
        {description && (
          <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {description}
          </span>
        )}
      </div>

      <div
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
          isChecked ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
        }`}
      >
        <span
          className={`inline-block size-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
            isChecked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}

export function DropdownSubmenu({
  label,
  icon,
  children,
  placement = "right-start",
  className = "",
}: DropdownSubmenuProps) {
  const [open, setOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const flyoutClass =
    placement === "left-start"
      ? "right-full top-0 mr-1.5"
      : "left-full top-0 ml-1.5";

  return (
    <div
      ref={submenuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="shrink-0 text-slate-400 group-hover:text-current dark:text-slate-500">
              {icon}
            </span>
          )}
          <span>{label}</span>
        </div>
        <svg
          className="size-4 text-slate-400 transition-transform group-hover:text-slate-600 dark:group-hover:text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 min-w-48 rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-2xl shadow-slate-950/15 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-black/50 ${flyoutClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
