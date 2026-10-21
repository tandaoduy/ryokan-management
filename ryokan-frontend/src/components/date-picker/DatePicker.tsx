"use client";

import { useEffect, useRef, useState } from "react";
import type { DatePickerProps } from "./types";

const MONTH_NAMES = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

const WEEK_DAYS = [
  { key: "t2", label: "T2", isWeekend: false },
  { key: "t3", label: "T3", isWeekend: false },
  { key: "t4", label: "T4", isWeekend: false },
  { key: "t5", label: "T5", isWeekend: false },
  { key: "t6", label: "T6", isWeekend: false },
  { key: "t7", label: "T7", isWeekend: true },
  { key: "cn", label: "CN", isWeekend: true },
];

function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function formatDateString(year: number, month: number, day: number): string {
  return `${year}-${padZero(month + 1)}-${padZero(day)}`;
}

function parseDateString(dateStr: string): { year: number; month: number; day: number } | null {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
  return { year: y, month: m - 1, day: d };
}

function formatDisplayDate(dateStr: string): string {
  const parsed = parseDateString(dateStr);
  if (!parsed) return "";
  return `${padZero(parsed.day)}/${padZero(parsed.month + 1)}/${parsed.year}`;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(year: number, month: number): number {
  const normalizedMonth = ((month % 12) + 12) % 12;
  const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[normalizedMonth];
}

function getFirstDayOfWeek(year: number, month: number): number {
  // Sakamoto's algorithm: 0 = Mon, ..., 6 = Sun
  const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  let y = year;
  if (month < 2) y -= 1;
  const sunBased = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[month] + 1) % 7;
  return (sunBased + 6) % 7;
}

export function DatePicker({
  label,
  value,
  defaultValue = "",
  onChange,
  min,
  max,
  variant = "default",
  placeholder = "Chọn ngày",
  className = "",
}: DatePickerProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const initialParsed = parseDateString(currentValue);

  const [viewYear, setViewYear] = useState(initialParsed?.year ?? 2026);
  const [viewMonth, setViewMonth] = useState(initialParsed?.month ?? 9);
  const [todayStr, setTodayStr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!isOpen) {
      const now = new Date();
      const str = formatDateString(now.getFullYear(), now.getMonth(), now.getDate());
      setTodayStr(str);

      const parsed = parseDateString(currentValue);
      if (parsed) {
        setViewYear(parsed.year);
        setViewMonth(parsed.month);
      } else {
        setViewYear(now.getFullYear());
        setViewMonth(now.getMonth());
      }
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setViewMode("days");
    }
  };

  // Click outside and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setViewMode("days");
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setViewMode("days");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectDate = (dateStr: string) => {
    if (isDateDisabled(dateStr)) return;
    if (value === undefined) {
      setInternalValue(dateStr);
    }
    onChange?.(dateStr);
    setIsOpen(false);
    setViewMode("days");
  };

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (value === undefined) {
      setInternalValue("");
    }
    onChange?.("");
  };

  const handleToday = () => {
    const now = new Date();
    const str = formatDateString(now.getFullYear(), now.getMonth(), now.getDate());
    setViewYear(now.getFullYear());
    setViewMonth(now.getMonth());
    handleSelectDate(str);
  };

  const isDateDisabled = (dateStr: string) => {
    if (min && dateStr < min) return true;
    if (max && dateStr > max) return true;
    return false;
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  // Pure deterministic calendar days calculation
  const startingDayOfWeek = getFirstDayOfWeek(viewYear, viewMonth);
  const daysInCurrentMonth = getDaysInMonth(viewYear, viewMonth);
  const prevMonthIndex = viewMonth === 0 ? 11 : viewMonth - 1;
  const prevMonthYear = viewMonth === 0 ? viewYear - 1 : viewYear;
  const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonthIndex);

  const calendarDays: Array<{
    day: number;
    month: number;
    year: number;
    dateStr: string;
    isCurrentMonth: boolean;
    isWeekend: boolean;
  }> = [];

  // Trailing days from previous month
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const dayIndex = calendarDays.length % 7;
    calendarDays.push({
      day,
      month: prevMonthIndex,
      year: prevMonthYear,
      dateStr: formatDateString(prevMonthYear, prevMonthIndex, day),
      isCurrentMonth: false,
      isWeekend: dayIndex === 5 || dayIndex === 6,
    });
  }

  // Days of current month
  for (let day = 1; day <= daysInCurrentMonth; day++) {
    const dayIndex = calendarDays.length % 7;
    calendarDays.push({
      day,
      month: viewMonth,
      year: viewYear,
      dateStr: formatDateString(viewYear, viewMonth, day),
      isCurrentMonth: true,
      isWeekend: dayIndex === 5 || dayIndex === 6,
    });
  }

  // Leading days of next month (complete 42 cells)
  const remainingCells = 42 - calendarDays.length;
  const nextMonthIndex = viewMonth === 11 ? 0 : viewMonth + 1;
  const nextMonthYear = viewMonth === 11 ? viewYear + 1 : viewYear;
  for (let day = 1; day <= remainingCells; day++) {
    const dayIndex = calendarDays.length % 7;
    calendarDays.push({
      day,
      month: nextMonthIndex,
      year: nextMonthYear,
      dateStr: formatDateString(nextMonthYear, nextMonthIndex, day),
      isCurrentMonth: false,
      isWeekend: dayIndex === 5 || dayIndex === 6,
    });
  }

  const surfaceStyle =
    variant === "filled"
      ? "border-transparent bg-slate-100 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700/60"
      : variant === "underline"
      ? "rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500"
      : "border-slate-300 bg-white hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:hover:border-slate-500 shadow-sm shadow-slate-950/5";

  // Years for year picker (12-year window)
  const yearStart = Math.floor(viewYear / 12) * 12;
  const yearOptions = Array.from({ length: 12 }, (_, i) => yearStart + i);

  return (
    <div ref={containerRef} className={`relative block ${className}`}>
      {label && (
        <span className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          {label}
        </span>
      )}

      {/* Trigger Button */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
        className={`group flex w-full cursor-pointer items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm transition outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
          isOpen ? "border-indigo-500 ring-4 ring-indigo-500/10" : ""
        } ${surfaceStyle}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          <svg
            className="size-4 text-slate-400 transition-colors group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className={currentValue ? "font-medium text-slate-900 dark:text-slate-100" : "text-slate-400 dark:text-slate-500"}>
            {currentValue ? formatDisplayDate(currentValue) : placeholder}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {currentValue && (
            <button
              type="button"
              onClick={handleClear}
              className="flex size-5 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200 transition"
              aria-label="Xóa ngày đã chọn"
              title="Xóa"
            >
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <svg
            className={`size-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Calendar Dropdown Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Lịch chọn ngày"
          className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95 dark:shadow-black/50"
        >
          {/* Calendar Header */}
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (viewMode === "days") prevMonth();
                else if (viewMode === "years") setViewYear((y) => y - 12);
                else setViewYear((y) => y - 1);
              }}
              className="flex size-8 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Trước"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Month & Year Title Clickable */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode(viewMode === "months" ? "days" : "months")}
                className="rounded-lg px-2 py-1 text-sm font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-100 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
              >
                {MONTH_NAMES[viewMonth]}
              </button>
              <button
                type="button"
                onClick={() => setViewMode(viewMode === "years" ? "days" : "years")}
                className="rounded-lg px-2 py-1 text-sm font-bold text-slate-800 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-100 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
              >
                {viewYear}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                if (viewMode === "days") nextMonth();
                else if (viewMode === "years") setViewYear((y) => y + 12);
                else setViewYear((y) => y + 1);
              }}
              className="flex size-8 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Tiếp theo"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Month Selector Mode */}
          {viewMode === "months" && (
            <div className="grid grid-cols-3 gap-2 py-2">
              {MONTH_NAMES.map((name, index) => {
                const isSelected = viewMonth === index;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setViewMonth(index);
                      setViewMode("days");
                    }}
                    className={`rounded-xl py-2.5 text-xs font-semibold transition ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Year Selector Mode */}
          {viewMode === "years" && (
            <div className="grid grid-cols-3 gap-2 py-2">
              {yearOptions.map((year) => {
                const isSelected = viewYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => {
                      setViewYear(year);
                      setViewMode("days");
                    }}
                    className={`rounded-xl py-2.5 text-xs font-semibold transition ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          )}

          {/* Day Grid Mode */}
          {viewMode === "days" && (
            <>
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 mb-1.5 text-center text-xs font-bold">
                {WEEK_DAYS.map((wd) => (
                  <div
                    key={wd.key}
                    className={`py-1.5 ${
                      wd.isWeekend ? "text-rose-500/90 dark:text-rose-400" : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {wd.label}
                  </div>
                ))}
              </div>

              {/* Day Cells */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((cell) => {
                  const isSelected = cell.dateStr === currentValue;
                  const isToday = cell.dateStr === todayStr;
                  const disabled = isDateDisabled(cell.dateStr);

                  return (
                    <button
                      key={cell.dateStr}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleSelectDate(cell.dateStr)}
                      className={`relative flex size-9 sm:size-9.5 items-center justify-center rounded-xl text-xs font-medium transition-all ${
                        disabled
                          ? "cursor-not-allowed opacity-20"
                          : isSelected
                          ? "bg-indigo-600 font-bold text-white shadow-md shadow-indigo-600/35 scale-105"
                          : cell.isCurrentMonth
                          ? cell.isWeekend
                            ? "text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40"
                            : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-300"
                          : "text-slate-300 hover:text-slate-600 hover:bg-slate-100 dark:text-slate-600 dark:hover:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      {cell.day}
                      {isToday && !isSelected && (
                        <span className="absolute bottom-1 size-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Footer Actions */}
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
            <button
              type="button"
              onClick={() => handleClear()}
              className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-500 transition hover:bg-rose-50 hover:text-rose-600 dark:text-slate-400 dark:hover:bg-rose-950/30 dark:hover:text-rose-400"
            >
              Xóa
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToday}
                className="rounded-lg px-2.5 py-1 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/40"
              >
                Hôm nay
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setViewMode("days");
                }}
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
