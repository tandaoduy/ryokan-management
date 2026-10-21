"use client";

import { useState, type ReactNode } from "react";
import type {
  SidebarCTA,
  SidebarGroup,
  SidebarItem,
  SidebarProps,
  SidebarSubItem,
  SidebarVariant,
} from "./types";

function getBadgeStyle(
  color: "default" | "brand" | "danger" | "success" | "warning" = "default"
): string {
  switch (color) {
    case "brand":
      return "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800";
    case "danger":
      return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800";
    case "success":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800";
    case "warning":
      return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";
    case "default":
    default:
      return "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
  }
}

function getVariantContainerStyle(variant: SidebarVariant): string {
  switch (variant) {
    case "compact":
      return "w-20 border-r border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100";
    case "dark":
      return "w-64 border-r border-slate-800 bg-slate-900 text-slate-100";
    case "glass":
      return "w-64 border-r border-white/20 bg-white/80 backdrop-blur-md text-slate-800 shadow-xl dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-100";
    case "default":
    default:
      return "w-64 border-r border-slate-200/90 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100";
  }
}

interface SidebarItemComponentProps {
  item: SidebarItem;
  variant: SidebarVariant;
  isCompact: boolean;
  expandedMap: Record<string, boolean>;
  onToggleExpand: (label: string) => void;
}

function SidebarItemRow({
  item,
  variant,
  isCompact,
  expandedMap,
  onToggleExpand,
}: SidebarItemComponentProps) {
  const isDark = variant === "dark";
  const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
  const isExpanded = Boolean(
    expandedMap[item.label] ??
      item.defaultExpanded ??
      item.subItems?.some((sub) => sub.active)
  );

  const baseItemClass = `group relative flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
    isCompact ? "justify-center" : "justify-between"
  } ${
    item.active
      ? "bg-indigo-600 text-white font-semibold shadow-xs"
      : isDark
      ? "text-slate-300 hover:bg-slate-800 hover:text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
  }`;

  const renderIcon = () => {
    if (!item.icon) return null;
    return (
      <span
        className={`shrink-0 flex items-center justify-center transition-colors ${
          item.active
            ? "text-white"
            : isDark
            ? "text-slate-400 group-hover:text-white"
            : "text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white"
        }`}
      >
        {item.icon}
      </span>
    );
  };

  const renderBadge = () => {
    if (!item.badge) return null;
    if (isCompact) {
      return (
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-slate-900" />
      );
    }
    return (
      <span
        className={`ms-2 border px-2 py-0.5 text-xs font-semibold rounded-full ${
          item.active
            ? "bg-white/20 text-white border-white/30"
            : getBadgeStyle(item.badgeColor)
        }`}
      >
        {item.badge}
      </span>
    );
  };

  if (hasSubItems && !isCompact) {
    return (
      <div className="space-y-1">
        <button
          type="button"
          onClick={() => onToggleExpand(item.label)}
          aria-expanded={isExpanded}
          className={`w-full ${baseItemClass}`}
        >
          <div className="flex items-center gap-3 truncate">
            {renderIcon()}
            <span className="truncate">{item.label}</span>
          </div>
          <div className="flex items-center gap-2">
            {renderBadge()}
            <svg
              className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              } ${item.active ? "text-white" : "text-slate-400"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isExpanded && (
          <ul className="space-y-1 py-1 ps-9">
            {item.subItems?.map((sub: SidebarSubItem, idx) => (
              <li key={`${sub.label}-${idx}`}>
                <a
                  href={sub.href || "#"}
                  onClick={sub.onClick}
                  className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    sub.active
                      ? "bg-indigo-50 text-indigo-700 font-semibold dark:bg-indigo-950/60 dark:text-indigo-300"
                      : isDark
                      ? "text-slate-400 hover:bg-slate-800/70 hover:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
                  }`}
                >
                  <span className="truncate">{sub.label}</span>
                  {sub.badge && (
                    <span className="border px-1.5 py-0.2 text-[10px] font-semibold rounded-full bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">
                      {sub.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href || "#"}
      onClick={item.onClick}
      title={isCompact ? item.label : undefined}
      className={baseItemClass}
    >
      <div className={`flex items-center ${isCompact ? "justify-center" : "gap-3 truncate"}`}>
        {renderIcon()}
        {!isCompact && <span className="truncate">{item.label}</span>}
      </div>
      {!isCompact && renderBadge()}
      {isCompact && renderBadge()}
    </a>
  );
}

function SidebarCTACard({
  cta,
  onDismiss,
}: {
  cta: SidebarCTA;
  onDismiss?: () => void;
}) {
  return (
    <div
      role="alert"
      className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-indigo-950 dark:bg-indigo-950/40 dark:border-indigo-900/60 dark:text-indigo-200 transition-all shadow-xs"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {cta.icon || (
            <svg
              className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
            {cta.title}
          </h4>
        </div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Đóng thông báo"
            className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-200 p-1 rounded-md hover:bg-indigo-100/60 dark:hover:bg-indigo-900/60 transition-colors"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <p className="text-xs text-indigo-800/90 dark:text-indigo-300/90 mb-3 leading-relaxed">
        {cta.description}
      </p>

      {cta.buttonHref ? (
        <a
          href={cta.buttonHref}
          className="inline-flex items-center justify-center w-full px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs transition-colors"
        >
          {cta.buttonText}
        </a>
      ) : (
        <button
          type="button"
          onClick={cta.onButtonClick}
          className="inline-flex items-center justify-center w-full px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs transition-colors"
        >
          {cta.buttonText}
        </button>
      )}
    </div>
  );
}

export function Sidebar({
  items,
  groups,
  brand = "Ryokan",
  brandLogo,
  brandName,
  brandHref = "#",
  cta,
  variant = "default",
  collapsed = false,
  isOpen,
  onClose,
  offCanvas = false,
  children,
  className = "",
}: SidebarProps) {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [ctaDismissed, setCtaDismissed] = useState(false);

  const isCompact = variant === "compact" || collapsed;

  const toggleExpand = (label: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Normalize items to groups
  const normalizedGroups: SidebarGroup[] = groups || (items ? [{ items }] : []);

  const variantContainerClass = getVariantContainerStyle(variant);

  const renderBrand = () => {
    if (brandLogo || brandName) {
      return (
        <a
          href={brandHref}
          className={`flex items-center ${
            isCompact ? "justify-center" : "gap-3"
          } mb-5 px-2 py-1 text-slate-900 dark:text-white group`}
        >
          {typeof brandLogo === "string" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={brandLogo} alt={brandName || "Logo"} className="h-7 w-auto shrink-0" />
          ) : (
            brandLogo
          )}
          {!isCompact && brandName && (
            <span className="self-center text-lg font-bold tracking-tight text-slate-900 dark:text-white truncate">
              {brandName}
            </span>
          )}
        </a>
      );
    }

    if (brand) {
      return (
        <div
          className={`mb-5 px-2 text-lg font-bold ${
            isCompact ? "text-center text-sm" : ""
          } ${variant === "dark" ? "text-white" : "text-slate-900 dark:text-white"}`}
        >
          {brand}
        </div>
      );
    }

    return null;
  };

  const sidebarContent = (
    <aside
      className={`relative flex flex-col h-full min-h-screen ${variantContainerClass} ${className} ${
        offCanvas
          ? `fixed top-0 left-0 z-50 h-screen transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : ""
      }`}
      aria-label="Sidebar navigation"
    >
      <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto">
        <div>
          {/* Top Header with Brand and optional Close Button for off-canvas/mobile */}
          <div className="flex items-center justify-between">
            <div className="flex-1">{renderBrand()}</div>
            {offCanvas && onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng sidebar"
                className="mb-5 -mr-1 p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Grouped Menu navigation */}
          <nav className="space-y-4">
            {normalizedGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-1">
                {group.separator && groupIdx > 0 && (
                  <div className="my-3 border-t border-slate-200 dark:border-slate-800" />
                )}
                {group.title && !isCompact && (
                  <div className="px-3 pt-2 pb-1 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {group.title}
                  </div>
                )}
                <ul className="space-y-1">
                  {group.items.map((item, itemIdx) => (
                    <li key={`${item.label}-${itemIdx}`}>
                      <SidebarItemRow
                        item={item}
                        variant={variant}
                        isCompact={isCompact}
                        expandedMap={expandedMap}
                        onToggleExpand={toggleExpand}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Custom children if provided */}
          {children && <div className="mt-4">{children}</div>}
        </div>

        {/* Bottom CTA Promo or Custom Element */}
        {!isCompact && cta && !ctaDismissed && (
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            {typeof cta === "object" && "title" in (cta as SidebarCTA) ? (
              <SidebarCTACard
                cta={cta as SidebarCTA}
                onDismiss={() => {
                  setCtaDismissed(true);
                  (cta as SidebarCTA).onDismiss?.();
                }}
              />
            ) : (
              (cta as ReactNode)
            )}
          </div>
        )}
      </div>
    </aside>
  );

  if (offCanvas) {
    return (
      <>
        {isOpen && (
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300"
            aria-hidden="true"
          />
        )}
        {sidebarContent}
      </>
    );
  }

  return sidebarContent;
}
