"use client";

import { useId, useState } from "react";
import type {
  Tab,
  TabItem,
  TabsColor,
  TabsProps,
} from "./types";

export type { Tab, TabItem };

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

function getUnderlineColorClasses(color: TabsColor): {
  active: string;
  inactive: string;
} {
  switch (color) {
    case "purple":
      return {
        active: "border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-purple-600 hover:border-purple-300 dark:text-slate-400 dark:hover:text-purple-300 dark:hover:border-purple-700",
      };
    case "emerald":
      return {
        active: "border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-emerald-600 hover:border-emerald-300 dark:text-slate-400 dark:hover:text-emerald-300 dark:hover:border-emerald-700",
      };
    case "amber":
      return {
        active: "border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400 font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-amber-600 hover:border-amber-300 dark:text-slate-400 dark:hover:text-amber-300 dark:hover:border-amber-700",
      };
    case "rose":
      return {
        active: "border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400 font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-rose-600 hover:border-rose-300 dark:text-slate-400 dark:hover:text-rose-300 dark:hover:border-rose-700",
      };
    case "dark":
      return {
        active: "border-slate-900 text-slate-900 dark:border-white dark:text-white font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-700",
      };
    case "brand":
    default:
      return {
        active: "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold",
        inactive: "border-transparent text-slate-500 hover:text-indigo-600 hover:border-indigo-300 dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:border-indigo-700",
      };
  }
}

function getPillColorClasses(color: TabsColor): {
  active: string;
  inactive: string;
} {
  const inactive =
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white";

  switch (color) {
    case "purple":
      return { active: "bg-purple-600 text-white font-semibold shadow-xs", inactive };
    case "emerald":
      return { active: "bg-emerald-600 text-white font-semibold shadow-xs", inactive };
    case "amber":
      return { active: "bg-amber-600 text-white font-semibold shadow-xs", inactive };
    case "rose":
      return { active: "bg-rose-600 text-white font-semibold shadow-xs", inactive };
    case "dark":
      return {
        active: "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-xs",
        inactive,
      };
    case "brand":
    default:
      return { active: "bg-indigo-600 text-white font-semibold shadow-xs", inactive };
  }
}

function getDefaultVariantClasses(color: TabsColor): {
  active: string;
  inactive: string;
} {
  const inactive =
    "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50";

  switch (color) {
    case "purple":
      return {
        active: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 font-semibold",
        inactive,
      };
    case "emerald":
      return {
        active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-semibold",
        inactive,
      };
    case "amber":
      return {
        active: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 font-semibold",
        inactive,
      };
    case "rose":
      return {
        active: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 font-semibold",
        inactive,
      };
    case "dark":
      return {
        active: "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white font-semibold",
        inactive,
      };
    case "brand":
    default:
      return {
        active: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold",
        inactive,
      };
  }
}

export function Tabs({
  tabs,
  variant = "underline",
  orientation = "horizontal",
  color = "brand",
  defaultTabId,
  activeTabId,
  onTabChange,
  fullWidth = false,
  activeClasses,
  inactiveClasses,
  className = "",
  contentClassName = "",
  tabListClassName = "",
}: TabsProps) {
  const instanceId = useId();

  // Determine initial active index
  const initialIndex = defaultTabId
    ? Math.max(
        0,
        tabs.findIndex((t, i) => (t.id || String(i)) === defaultTabId)
      )
    : 0;

  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(initialIndex);

  // Controlled or uncontrolled active index
  const activeIndex =
    activeTabId !== undefined
      ? Math.max(
          0,
          tabs.findIndex((t, i) => (t.id || String(i)) === activeTabId)
        )
      : internalActiveIndex;

  const handleTabClick = (index: number) => {
    if (tabs[index]?.disabled) return;
    setInternalActiveIndex(index);
    const tabId = tabs[index]?.id || String(index);
    onTabChange?.(tabId, index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isVertical = orientation === "vertical";
    const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
    const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";

    let targetIndex = -1;

    if (e.key === nextKey) {
      e.preventDefault();
      targetIndex = (index + 1) % tabs.length;
      while (tabs[targetIndex]?.disabled && targetIndex !== index) {
        targetIndex = (targetIndex + 1) % tabs.length;
      }
    } else if (e.key === prevKey) {
      e.preventDefault();
      targetIndex = (index - 1 + tabs.length) % tabs.length;
      while (tabs[targetIndex]?.disabled && targetIndex !== index) {
        targetIndex = (targetIndex - 1 + tabs.length) % tabs.length;
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
      while (tabs[targetIndex]?.disabled && targetIndex < tabs.length - 1) {
        targetIndex++;
      }
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = tabs.length - 1;
      while (tabs[targetIndex]?.disabled && targetIndex > 0) {
        targetIndex--;
      }
    }

    if (targetIndex >= 0 && !tabs[targetIndex]?.disabled) {
      handleTabClick(targetIndex);
    }
  };

  // Determine variant-specific styling for each tab item
  const getTabClasses = (isActive: boolean, isDisabled?: boolean) => {
    if (isDisabled) {
      return "cursor-not-allowed opacity-45 pointer-events-none text-slate-400 dark:text-slate-600";
    }

    if (activeClasses && isActive) {
      return activeClasses;
    }
    if (inactiveClasses && !isActive) {
      return inactiveClasses;
    }

    switch (variant) {
      case "pills": {
        const { active, inactive } = getPillColorClasses(color);
        return `px-4 py-2.5 rounded-xl transition-all duration-150 ${
          isActive ? active : inactive
        }`;
      }
      case "boxed": {
        return `px-4 py-2 rounded-lg transition-all duration-150 ${
          isActive
            ? "bg-white text-slate-900 font-semibold shadow-xs dark:bg-slate-900 dark:text-white"
            : "text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/40"
        }`;
      }
      case "full-width": {
        return `flex-1 py-3 px-4 text-center justify-center transition-colors ${
          isActive
            ? "bg-slate-100 text-indigo-700 font-semibold z-10 dark:bg-slate-800 dark:text-indigo-400"
            : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
        }`;
      }
      case "default": {
        const { active, inactive } = getDefaultVariantClasses(color);
        return `p-4 rounded-t-xl transition-colors ${
          isActive ? active : inactive
        }`;
      }
      case "underline":
      default: {
        const { active, inactive } = getUnderlineColorClasses(color);
        return `p-4 border-b-2 rounded-t-xl transition-all duration-150 ${
          isActive ? active : inactive
        }`;
      }
    }
  };

  const isVertical = orientation === "vertical";
  const effectiveFullWidth = fullWidth || variant === "full-width";

  // Tablist container styling
  const getTabListWrapperClass = () => {
    if (isVertical) {
      return "flex flex-col space-y-2 md:w-64 shrink-0";
    }
    if (variant === "boxed") {
      return "inline-flex p-1.5 gap-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-sm font-medium";
    }
    if (variant === "full-width") {
      return "flex w-full text-sm font-medium -space-x-px rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-x divide-slate-200 dark:divide-slate-800";
    }
    if (variant === "pills") {
      return "flex flex-wrap gap-2 text-sm font-medium";
    }
    if (variant === "default") {
      return "flex flex-wrap text-sm font-medium text-center border-b border-slate-200 dark:border-slate-800";
    }
    // underline
    return "flex flex-wrap -mb-px text-sm font-medium text-center border-b border-slate-200 dark:border-slate-800";
  };

  const activeTab = tabs[activeIndex];

  return (
    <div
      className={`${
        isVertical ? "md:flex md:items-start md:gap-6" : "space-y-4"
      } ${className}`}
    >
      {/* Mobile Select dropdown for full-width or narrow spaces */}
      {effectiveFullWidth && !isVertical && (
        <div className="sm:hidden mb-3">
          <label htmlFor={`tabs-select-${instanceId}`} className="sr-only">
            Chọn tab
          </label>
          <select
            id={`tabs-select-${instanceId}`}
            value={activeIndex}
            onChange={(e) => handleTabClick(Number(e.target.value))}
            className="block w-full px-3 py-2.5 bg-white border border-slate-300 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
          >
            {tabs.map((tab, idx) => (
              <option key={idx} value={idx} disabled={tab.disabled}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Main Tablist */}
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`${getTabListWrapperClass()} ${
          effectiveFullWidth && !isVertical ? "hidden sm:flex" : ""
        } ${tabListClassName}`}
      >
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          const tabElementId = `tab-${instanceId}-${tab.id || idx}`;
          const panelElementId = `panel-${instanceId}-${tab.id || idx}`;

          return (
            <button
              key={`${tab.label}-${idx}`}
              id={tabElementId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelElementId}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => handleTabClick(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`inline-flex items-center text-sm font-medium transition-colors ${
                isVertical
                  ? `w-full px-4 py-3 rounded-xl justify-start ${
                      isActive
                        ? "bg-indigo-600 text-white font-semibold shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`
                  : ""
              } ${
                effectiveFullWidth && !isVertical ? "justify-center" : ""
              } ${getTabClasses(isActive, tab.disabled)}`}
            >
              {tab.icon && (
                <span
                  className={`shrink-0 me-2.5 transition-colors ${
                    isActive
                      ? "text-inherit"
                      : "text-slate-400 group-hover:text-inherit dark:text-slate-500"
                  }`}
                >
                  {tab.icon}
                </span>
              )}
              <span className="truncate">{tab.label}</span>
              {tab.badge && (
                <span
                  className={`ms-2 border px-2 py-0.5 text-xs font-semibold rounded-full ${
                    isActive
                      ? "bg-white/20 text-inherit border-transparent"
                      : getBadgeStyle(tab.badgeColor)
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel Content */}
      {activeTab && (
        <div
          id={`panel-${instanceId}-${activeTab.id || activeIndex}`}
          role="tabpanel"
          aria-labelledby={`tab-${instanceId}-${activeTab.id || activeIndex}`}
          tabIndex={0}
          className={`${
            isVertical
              ? "flex-1 p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800"
              : "pt-2"
          } ${contentClassName}`}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}
