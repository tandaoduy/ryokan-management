"use client";

import { useId, useState } from "react";
import type {
  PaginationNavigationProps,
  PaginationProps,
  PaginationSelectJumperProps,
  PaginationSingleProps,
  PaginationSize,
  PaginationTableInfoProps,
} from "./types";

// Helper to compute size-based styles
function getSizeClasses(size: PaginationSize = "md") {
  switch (size) {
    case "sm":
      return {
        button: "h-8 min-w-8 text-xs px-2.5",
        square: "h-8 w-8 text-xs",
        icon: "size-3.5",
        input: "h-8 text-xs px-2",
        select: "h-8 text-xs px-2 py-1",
      };
    case "lg":
      return {
        button: "h-10 min-w-10 text-base px-4",
        square: "h-10 w-10 text-base",
        icon: "size-4.5",
        input: "h-10 text-base px-3",
        select: "h-10 text-base px-3 py-1.5",
      };
    case "md":
    default:
      return {
        button: "h-9 min-w-9 text-sm px-3",
        square: "h-9 w-9 text-sm",
        icon: "size-4",
        input: "h-9 text-sm px-2.5",
        select: "h-9 text-sm px-2.5 py-1",
      };
  }
}

// Generate page array with smart ellipsis (...)
function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): (number | string)[] {
  const totalPageNumbers = siblingCount * 2 + 5; // 1 + 2 dots + 2 ends + 2*siblings

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "...", totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [firstPageIndex, "...", ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
}

// SVG Previous Chevron
function ChevronLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`size-4 rtl:rotate-180 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
    </svg>
  );
}

// SVG Next Chevron
function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`size-4 rtl:rotate-180 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}

// Subcomponent: Showing X to Y of Z Entries
export function PaginationTableInfo({
  currentPage,
  totalItems,
  itemsPerPage,
  className = "",
  labelFormat,
}: PaginationTableInfoProps) {
  const start = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  if (labelFormat) {
    return <span className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}>{labelFormat(start, end, totalItems)}</span>;
  }

  return (
    <span className={`text-sm text-slate-600 dark:text-slate-400 ${className}`}>
      Hiển thị{" "}
      <span className="font-semibold text-slate-900 dark:text-white">
        {totalItems > 0 ? start : 0}
      </span>{" "}
      đến{" "}
      <span className="font-semibold text-slate-900 dark:text-white">{end}</span>{" "}
      trong số{" "}
      <span className="font-semibold text-slate-900 dark:text-white">
        {totalItems}
      </span>{" "}
      kết quả
    </span>
  );
}

// Subcomponent: Simple standalone Previous & Next buttons
export function PaginationNavigation({
  currentPage,
  totalPages,
  onPageChange,
  variant = "separated",
  size = "md",
  showIcons = true,
  showText = true,
  previousLabel = "Trước",
  nextLabel = "Sau",
  className = "",
}: PaginationNavigationProps) {
  const sizeClasses = getSizeClasses(size);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  const baseBtn =
    "inline-flex items-center justify-center font-medium transition duration-150 border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400";

  if (variant === "grouped") {
    return (
      <div className={`inline-flex -space-x-px ${className}`}>
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          className={`${baseBtn} rounded-s-xl ${sizeClasses.button}`}
          aria-label={previousLabel}
        >
          {showIcons && <ChevronLeftIcon className={`${showText ? "me-1.5 -ms-0.5" : ""} ${sizeClasses.icon}`} />}
          {showText && previousLabel}
        </button>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          className={`${baseBtn} rounded-e-xl ${sizeClasses.button}`}
          aria-label={nextLabel}
        >
          {showText && nextLabel}
          {showIcons && <ChevronRightIcon className={`${showText ? "ms-1.5 -me-0.5" : ""} ${sizeClasses.icon}`} />}
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        className={`${baseBtn} rounded-xl ${sizeClasses.button}`}
        aria-label={previousLabel}
      >
        {showIcons && <ChevronLeftIcon className={`${showText ? "me-1.5 -ms-0.5" : ""} ${sizeClasses.icon}`} />}
        {showText && previousLabel}
      </button>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        className={`${baseBtn} rounded-xl ${sizeClasses.button}`}
        aria-label={nextLabel}
      >
        {showText && nextLabel}
        {showIcons && <ChevronRightIcon className={`${showText ? "ms-1.5 -me-0.5" : ""} ${sizeClasses.icon}`} />}
      </button>
    </div>
  );
}

// Subcomponent: Compact Single Pagination (< 1 of 99 >)
export function PaginationSingle({
  currentPage,
  totalPages,
  onPageChange,
  size = "md",
  className = "",
}: PaginationSingleProps) {
  const sizeClasses = getSizeClasses(size);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <nav aria-label="Single page navigation" className={className}>
      <div className="inline-flex items-center -space-x-px rounded-xl border border-slate-200 bg-white shadow-xs dark:border-slate-700 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          className={`inline-flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none rounded-s-xl dark:text-slate-300 dark:hover:bg-slate-800 ${sizeClasses.square}`}
          aria-label="Trang trước"
        >
          <ChevronLeftIcon className={sizeClasses.icon} />
        </button>
        <span
          className={`inline-flex shrink-0 items-center justify-center border-x border-slate-200 px-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-200 ${sizeClasses.button}`}
        >
          {currentPage} / {totalPages}
        </span>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          className={`inline-flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none rounded-e-xl dark:text-slate-300 dark:hover:bg-slate-800 ${sizeClasses.square}`}
          aria-label="Trang kế tiếp"
        >
          <ChevronRightIcon className={sizeClasses.icon} />
        </button>
      </div>
    </nav>
  );
}

// Subcomponent: Select Page Jumper (Dropdown + of 99 pages + arrows)
export function PaginationSelectJumper({
  currentPage,
  totalPages,
  onPageChange,
  size = "md",
  className = "",
}: PaginationSelectJumperProps) {
  const sizeClasses = getSizeClasses(size);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <select
        value={currentPage}
        onChange={(e) => onPageChange(Number(e.target.value))}
        className={`rounded-xl border border-slate-200 bg-white font-semibold text-slate-800 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${sizeClasses.select}`}
        aria-label="Chọn số trang"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <option key={p} value={p}>
            Trang {p.toString().padStart(2, "0")}
          </option>
        ))}
      </select>

      <span className="text-sm text-slate-500 dark:text-slate-400">
        của {totalPages} trang
      </span>

      <div className="inline-flex -space-x-px rounded-xl shadow-xs">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          className={`inline-flex items-center justify-center rounded-s-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 ${sizeClasses.square}`}
          aria-label="Trang trước"
        >
          <ChevronLeftIcon className={sizeClasses.icon} />
        </button>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          className={`inline-flex items-center justify-center rounded-e-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 ${sizeClasses.square}`}
          aria-label="Trang kế tiếp"
        >
          <ChevronRightIcon className={sizeClasses.icon} />
        </button>
      </div>
    </div>
  );
}

// Main Pagination Component
export function Pagination({
  totalPages,
  currentPage: controlledPage,
  initialPage = 1,
  onPageChange,
  onChange,
  variant = "default",
  size = "md",
  layout = "grouped",
  showIcons = true,
  showText = false,
  previousLabel = "Trước",
  nextLabel = "Sau",
  siblingCount = 1,
  totalItems,
  itemsPerPage = 10,
  onItemsPerPageChange,
  pageSizeOptions = [10, 25, 50, 100],
  showPageJumper = false,
  showPageSizeSelector = false,
  className = "",
}: PaginationProps) {
  const [internalPage, setInternalPage] = useState(initialPage);
  const [jumperInput, setJumperInput] = useState("");
  const inputId = useId();

  const isControlled = controlledPage !== undefined;
  const page = isControlled ? controlledPage : internalPage;

  const handlePageChange = (next: number) => {
    const valid = Math.min(Math.max(next, 1), totalPages);
    if (!isControlled) {
      setInternalPage(valid);
    }
    onPageChange?.(valid);
    onChange?.(valid);
  };

  const handleJumperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(jumperInput, 10);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      handlePageChange(val);
      setJumperInput("");
    }
  };

  const sizeClasses = getSizeClasses(size);
  const isFirst = page <= 1;
  const isLast = page >= totalPages;

  // Single pagination special layout
  if (variant === "single") {
    return (
      <PaginationSingle
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        size={size}
        className={className}
      />
    );
  }

  // Pure navigation (Prev / Next only)
  if (layout === "navigation") {
    return (
      <PaginationNavigation
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant={variant === "rounded" ? "separated" : "grouped"}
        size={size}
        showIcons={showIcons}
        showText={showText || !showIcons}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        className={className}
      />
    );
  }

  const pages = getPaginationRange(page, totalPages, siblingCount);

  // Styles per variant
  const getButtonClass = (
    isCurrent: boolean,
    isFirstItem: boolean,
    isLastItem: boolean
  ) => {
    if (variant === "minimal") {
      return `inline-flex items-center justify-center font-medium transition duration-150 rounded-xl ${
        sizeClasses.square
      } ${
        isCurrent
          ? "bg-indigo-600 text-white font-semibold shadow-xs"
          : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
      }`;
    }

    if (variant === "rounded") {
      return `inline-flex items-center justify-center font-medium transition duration-150 rounded-full border ${
        sizeClasses.square
      } ${
        isCurrent
          ? "border-indigo-600 bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      }`;
    }

    // Default: connected list with -space-x-px
    const corner = isFirstItem
      ? "rounded-s-xl"
      : isLastItem
      ? "rounded-e-xl"
      : "";

    return `inline-flex items-center justify-center font-medium transition duration-150 border box-border ${
      sizeClasses.square
    } ${corner} ${
      isCurrent
        ? "z-10 border-indigo-600 bg-indigo-600 text-white font-semibold shadow-xs"
        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
    }`;
  };

  const prevNextBase = (isPrev: boolean) => {
    if (variant === "minimal") {
      return `inline-flex items-center justify-center font-medium transition duration-150 rounded-xl ${
        showText ? sizeClasses.button : sizeClasses.square
      } text-slate-700 hover:bg-slate-100 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none dark:text-slate-300 dark:hover:bg-slate-800`;
    }

    if (variant === "rounded") {
      return `inline-flex items-center justify-center font-medium transition duration-150 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 ${
        showText ? sizeClasses.button : sizeClasses.square
      }`;
    }

    // Default
    return `inline-flex items-center justify-center font-medium transition duration-150 border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 ${
      isPrev ? "rounded-s-xl" : "rounded-e-xl"
    } ${showText ? sizeClasses.button : sizeClasses.square}`;
  };

  const navList = (
    <ul
      className={`flex items-center ${
        variant === "default" ? "-space-x-px" : "gap-1.5"
      }`}
    >
      {/* Previous Button */}
      <li>
        <button
          type="button"
          onClick={() => handlePageChange(page - 1)}
          disabled={isFirst}
          className={prevNextBase(true)}
          aria-label={previousLabel}
        >
          {showIcons && (
            <ChevronLeftIcon
              className={`${showText ? "me-1.5 -ms-0.5" : ""} ${sizeClasses.icon}`}
            />
          )}
          {showText && previousLabel}
        </button>
      </li>

      {/* Page Numbers */}
      {pages.map((p, index) => {
        if (p === "...") {
          return (
            <li key={`ellipsis-${index}`}>
              <span
                className={`inline-flex items-center justify-center text-slate-400 dark:text-slate-500 ${sizeClasses.square}`}
              >
                ...
              </span>
            </li>
          );
        }

        const pageNum = Number(p);
        const isCurrent = pageNum === page;

        return (
          <li key={pageNum}>
            <button
              type="button"
              onClick={() => handlePageChange(pageNum)}
              aria-current={isCurrent ? "page" : undefined}
              className={getButtonClass(isCurrent, false, false)}
            >
              {pageNum}
            </button>
          </li>
        );
      })}

      {/* Next Button */}
      <li>
        <button
          type="button"
          onClick={() => handlePageChange(page + 1)}
          disabled={isLast}
          className={prevNextBase(false)}
          aria-label={nextLabel}
        >
          {showText && nextLabel}
          {showIcons && (
            <ChevronRightIcon
              className={`${showText ? "ms-1.5 -me-0.5" : ""} ${sizeClasses.icon}`}
            />
          )}
        </button>
      </li>
    </ul>
  );

  return (
    <nav
      aria-label="Phân trang"
      className={`flex flex-wrap items-center justify-between gap-4 ${className}`}
    >
      {/* Optional Table Counter Info */}
      {(layout === "table" || variant === "table") && totalItems !== undefined && (
        <PaginationTableInfo
          currentPage={page}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
      )}

      {/* Page Navigation List */}
      <div className="flex flex-wrap items-center gap-3">
        {navList}

        {/* Page Size Selector Dropdown */}
        {(showPageSizeSelector || layout === "dropdown") && onItemsPerPageChange && (
          <div className="flex items-center gap-2">
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className={`rounded-xl border border-slate-200 bg-white font-medium text-slate-800 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 ${sizeClasses.select}`}
              aria-label="Số dòng trên mỗi trang"
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} / trang
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Page Jumper Input */}
        {(showPageJumper || layout === "input") && (
          <form
            onSubmit={handleJumperSubmit}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <label htmlFor={inputId} className="shrink-0 text-sm font-medium">
              Đi đến
            </label>
            <input
              id={inputId}
              type="number"
              min={1}
              max={totalPages}
              value={jumperInput}
              onChange={(e) => setJumperInput(e.target.value)}
              placeholder={page.toString()}
              className={`w-14 rounded-xl border border-slate-200 bg-white text-center font-medium text-slate-800 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${sizeClasses.input}`}
            />
            <span className="text-sm font-medium">trang</span>
            <button
              type="submit"
              className={`rounded-xl bg-indigo-600 font-semibold text-white shadow-xs transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${sizeClasses.button}`}
            >
              Đi
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}
