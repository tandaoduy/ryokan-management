"use client";

import { useEffect, useRef, useState } from "react";
import type { PopoverPlacement, PopoverProps } from "./types";

function getPlacementClasses(placement: PopoverPlacement = "bottom"): {
  popover: string;
  arrow: string;
} {
  switch (placement) {
    case "top":
      return {
        popover: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
        arrow: "bottom-[-5px] left-1/2 -translate-x-1/2 border-b border-r",
      };
    case "top-start":
      return {
        popover: "bottom-full left-0 mb-2.5",
        arrow: "bottom-[-5px] left-4 border-b border-r",
      };
    case "top-end":
      return {
        popover: "bottom-full right-0 mb-2.5",
        arrow: "bottom-[-5px] right-4 border-b border-r",
      };
    case "bottom":
      return {
        popover: "top-full left-1/2 -translate-x-1/2 mt-2.5",
        arrow: "-top-[5px] left-1/2 -translate-x-1/2 border-t border-l",
      };
    case "bottom-start":
      return {
        popover: "top-full left-0 mt-2.5",
        arrow: "-top-[5px] left-4 border-t border-l",
      };
    case "bottom-end":
      return {
        popover: "top-full right-0 mt-2.5",
        arrow: "-top-[5px] right-4 border-t border-l",
      };
    case "left":
      return {
        popover: "right-full top-1/2 -translate-y-1/2 mr-2.5",
        arrow: "right-[-5px] top-1/2 -translate-y-1/2 border-t border-r",
      };
    case "left-start":
      return {
        popover: "right-full top-0 mr-2.5",
        arrow: "right-[-5px] top-4 border-t border-r",
      };
    case "left-end":
      return {
        popover: "right-full bottom-0 mr-2.5",
        arrow: "right-[-5px] bottom-4 border-t border-r",
      };
    case "right":
      return {
        popover: "left-full top-1/2 -translate-y-1/2 ml-2.5",
        arrow: "-left-[5px] top-1/2 -translate-y-1/2 border-b border-l",
      };
    case "right-start":
      return {
        popover: "left-full top-0 ml-2.5",
        arrow: "-left-[5px] top-4 border-b border-l",
      };
    case "right-end":
      return {
        popover: "left-full bottom-0 ml-2.5",
        arrow: "-left-[5px] bottom-4 border-b border-l",
      };
    default:
      return {
        popover: "top-full left-1/2 -translate-x-1/2 mt-2.5",
        arrow: "-top-[5px] left-1/2 -translate-x-1/2 border-t border-l",
      };
  }
}

export function Popover({
  trigger,
  children,
  title,
  content,
  placement = "bottom",
  triggerType = "click",
  showArrow = true,
  offset = 8,
  delay = 150,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className = "",
  triggerClassName = "",
  width = "w-72",
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

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

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (triggerType === "click") {
      e.stopPropagation();
      setOpen(!isOpen);
    }
  };

  // Close on click outside and escape
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isControlled, onOpenChange]);

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const { popover: placementClass, arrow: arrowPlacementClass } =
    getPlacementClasses(placement);

  const bodyContent = content ?? children;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${isOpen ? "z-40" : ""} ${className}`}
    >
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleTriggerClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(!isOpen);
          }
        }}
        className={`inline-block cursor-pointer outline-none ${triggerClassName}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {typeof trigger === "function" ? trigger({ open: isOpen }) : trigger}
      </div>

      {/* Popover Bubble */}
      {isOpen && (
        <div
          role="tooltip"
          className={`absolute z-50 ${width} transition-all animate-in fade-in-0 zoom-in-95 duration-150 rounded-2xl border border-slate-200/90 bg-white shadow-2xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-800/95 dark:shadow-2xl dark:shadow-black/70 dark:ring-1 dark:ring-white/10 ${placementClass}`}
          style={offset !== 8 ? { margin: `${offset}px` } : undefined}
        >
          {/* Arrow */}
          {showArrow && (
            <div
              data-popper-arrow
              className={`absolute size-2.5 rotate-45 bg-white border-slate-200/90 dark:bg-slate-800 dark:border-slate-700/80 ${arrowPlacementClass}`}
            />
          )}

          {/* Title Header (if provided) */}
          {title && (
            <div className="rounded-t-2xl border-b border-slate-100 bg-slate-50/80 px-4 py-2.5 dark:border-slate-700/80 dark:bg-slate-800/80">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
            </div>
          )}

          {/* Body Content */}
          <div className="p-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {bodyContent}
          </div>
        </div>
      )}
    </div>
  );
}
