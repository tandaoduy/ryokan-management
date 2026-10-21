"use client";

import { useId, useState } from "react";
import type {
  NavbarBrandProps,
  NavbarCollapseProps,
  NavbarLinkProps,
  NavbarProps,
  NavbarSubmenuProps,
  NavbarToggleProps,
  NavbarVariant,
} from "./types";

export type { NavItem } from "./types";

function getVariantStyles(variant: NavbarVariant = "default") {
  switch (variant) {
    case "glass":
      return "border-white/40 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-950/5 dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-black/40";
    case "solid":
      return "border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-800/80";
    case "dark":
      return "border-slate-800 bg-slate-950 text-white shadow-xl shadow-black/30 dark:border-slate-800 dark:bg-slate-950";
    case "transparent":
      return "border-transparent bg-transparent shadow-none";
    case "default":
    default:
      return "border-slate-200/80 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900";
  }
}

// Subcomponent: NavbarBrand
export function NavbarBrand({
  href = "#",
  logo,
  name,
  children,
  className = "",
}: NavbarBrandProps) {
  const content = children || (
    <div className="flex items-center gap-3">
      {logo && (
        <div className="flex shrink-0 items-center justify-center">
          {typeof logo === "string" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={name ?? "Brand Logo"} className="h-7 w-auto" />
          ) : (
            logo
          )}
        </div>
      )}
      {name && (
        <span className="self-center whitespace-nowrap text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {name}
        </span>
      )}
    </div>
  );

  return (
    <a
      href={href}
      className={`inline-flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg ${className}`}
    >
      {content}
    </a>
  );
}

// Subcomponent: NavbarToggle (Hamburger)
export function NavbarToggle({
  isOpen,
  onToggle,
  className = "",
}: NavbarToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex size-10 items-center justify-center rounded-xl p-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 md:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white ${className}`}
      aria-expanded={isOpen}
      aria-label="Chuyển đổi menu điều hướng"
    >
      <svg
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}

// Subcomponent: NavbarLink
export function NavbarLink({
  href = "#",
  active = false,
  children,
  onClick,
  className = "",
}: NavbarLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`block rounded-xl px-3 py-2 text-sm font-semibold transition md:p-0 ${
        active
          ? "bg-indigo-600 text-white md:bg-transparent md:text-indigo-600 dark:md:text-indigo-400 font-bold"
          : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600 md:hover:bg-transparent md:hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 md:dark:hover:bg-transparent md:dark:hover:text-indigo-400"
      } ${className}`}
    >
      {children}
    </a>
  );
}

// Subcomponent: NavbarCollapse
export function NavbarCollapse({
  isOpen,
  children,
  className = "",
}: NavbarCollapseProps) {
  return (
    <div
      className={`${
        isOpen ? "block animate-in fade-in-0 duration-200" : "hidden"
      } w-full md:block md:w-auto ${className}`}
    >
      <ul className="mt-4 flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 font-medium md:mt-0 md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-900/60 md:dark:bg-transparent">
        {children}
      </ul>
    </div>
  );
}

// Subcomponent: NavbarSubmenu (Secondary subnav below main navbar)
export function NavbarSubmenu({
  children,
  className = "",
  fluid = false,
}: NavbarSubmenuProps) {
  return (
    <div className={`border-t border-slate-200/80 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/60 ${className}`}>
      <div
        className={`${
          fluid ? "w-full px-4 sm:px-6 lg:px-8" : "max-w-screen-xl px-4 sm:px-6 mx-auto"
        } py-2.5 overflow-x-auto`}
      >
        <div className="flex items-center gap-6 text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}

// Default Brand Logo
function RyokanDefaultLogo() {
  return (
    <div className="flex size-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/30">
      <svg
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </div>
  );
}

// Main Navbar Component
export function Navbar({
  brand,
  brandHref = "#",
  brandLogo,
  brandName = "Ryokan",
  items = [],
  children,
  action,
  search,
  onSearch,
  userMenu,
  variant = "default",
  sticky = false,
  fluid = false,
  bordered = true,
  rounded = false,
  className = "",
  containerClassName = "",
  mobileMenuOpen: controlledOpen,
  onMobileMenuToggle,
}: NavbarProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputId = useId();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const toggleMobileMenu = () => {
    const next = !isOpen;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onMobileMenuToggle?.(next);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const variantStyles = getVariantStyles(variant);
  const stickyStyles = sticky ? "sticky top-0 z-30" : "relative";
  const borderStyles = bordered ? "border-b" : "border-transparent";
  const roundedStyles = rounded ? "rounded-2xl border" : "";

  // Render brand section
  const brandSection = brand ?? (
    <NavbarBrand
      href={brandHref}
      logo={brandLogo ?? <RyokanDefaultLogo />}
      name={brandName}
    />
  );

  // Render search box
  const searchSection = search && (
    <form onSubmit={handleSearchSubmit} className="relative">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-slate-400 dark:text-slate-500">
        <svg
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        id={searchInputId}
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Tìm kiếm..."
        className="w-full sm:w-44 lg:w-56 rounded-xl border border-slate-200 bg-slate-50/70 py-2 pe-3 ps-9 text-sm text-slate-800 placeholder-slate-400 shadow-xs transition duration-150 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:bg-slate-900"
      />
    </form>
  );

  return (
    <header className={`${stickyStyles} ${className}`}>
      <nav
        className={`w-full transition-all duration-200 ${variantStyles} ${borderStyles} ${roundedStyles}`}
      >
        <div
          className={`${
            fluid
              ? "w-full px-4 sm:px-6 lg:px-8"
              : "max-w-screen-xl px-4 sm:px-6 mx-auto"
          } flex flex-wrap items-center justify-between py-3.5 ${containerClassName}`}
        >
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">{brandSection}</div>

          {/* Right Action Cluster (Desktop order 2) */}
          <div className="flex items-center gap-2.5 md:order-2">
            {/* Desktop Search */}
            {search && <div className="hidden md:block">{searchSection}</div>}

            {/* Language / User Menu / CTA Buttons */}
            {userMenu}
            {action}

            {/* Mobile Hamburger Toggle */}
            <NavbarToggle isOpen={isOpen} onToggle={toggleMobileMenu} />
          </div>

          {/* Main Navigation Links (Desktop order 1) */}
          <div
            className={`${
              isOpen ? "block animate-in fade-in-0 duration-200" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            {/* Mobile Search input inside collapsed menu */}
            {search && <div className="mt-3 md:hidden">{searchSection}</div>}

            {children ? (
              <div className="mt-4 md:mt-0">{children}</div>
            ) : (
              <ul className="mt-4 flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 font-medium md:mt-0 md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-900/60 md:dark:bg-transparent">
                {items.map((item) => {
                  if (item.dropdown) {
                    return (
                      <li key={item.label} className="relative">
                        {item.dropdown}
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <NavbarLink
                        href={item.href ?? "#"}
                        active={item.active}
                      >
                        <div className="flex items-center gap-1.5">
                          {item.icon && <span>{item.icon}</span>}
                          <span>{item.label}</span>
                          {item.badge && <span>{item.badge}</span>}
                        </div>
                      </NavbarLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
