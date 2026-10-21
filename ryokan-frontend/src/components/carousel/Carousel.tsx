"use client";

import { useState } from "react";
import type { CarouselProps } from "./types";

const variantConfig = {
  hero: {
    container: "rounded-3xl border border-slate-200 shadow-xl shadow-slate-950/10 dark:border-slate-700/80 dark:shadow-black/30",
    controls: "bg-transparent text-white drop-shadow-md hover:bg-white/20 hover:border-white/60 hover:backdrop-blur-sm",
    indicators: "absolute bottom-5 left-1/2 z-10 -translate-x-1/2 bg-transparent",
    activeDot: "bg-white shadow-sm shadow-black/30",
    dot: "bg-white/50 hover:bg-white/80 shadow-sm shadow-black/20",
  },
  card: {
    container: "rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/5 dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-black/20",
    controls: "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 hover:border-slate-300 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/80 dark:hover:border-slate-600",
    indicators: "p-3 bg-transparent",
    activeDot: "bg-indigo-600",
    dot: "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500",
  },
  minimal: {
    container: "rounded-xl border border-slate-200 bg-white dark:border-slate-700/80 dark:bg-slate-900",
    controls: "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 hover:border-slate-300 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/80 dark:hover:border-slate-600",
    indicators: "p-3 bg-transparent",
    activeDot: "bg-slate-800 dark:bg-slate-100",
    dot: "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500",
  },
};

const sizeConfig = { sm: "text-sm", md: "text-base", lg: "text-lg" };

export function Carousel({ items, initialSlide = 0, showControls = true, showIndicators = true, variant = "card", size = "md", className = "" }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(Math.min(Math.max(initialSlide, 0), Math.max(items.length - 1, 0)));
  if (!items.length) return null;

  const goTo = (index: number) => setActiveSlide((index + items.length) % items.length);
  const currentVariant = variantConfig[variant];

  return (
    <section className={`group relative overflow-hidden ${sizeConfig[size]} ${currentVariant.container} ${className}`} aria-roledescription="carousel" aria-label="Trình chiếu nội dung">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {items.map((item, index) => <div key={index} className="w-full shrink-0">{item}</div>)}
        </div>
        {showControls && items.length > 1 && <>
          <button
            type="button"
            onClick={() => goTo(activeSlide - 1)}
            className={`absolute top-1/2 left-3 sm:left-4 z-10 -translate-y-1/2 flex size-12 sm:size-14 items-center justify-center rounded-full border border-transparent transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 opacity-90 hover:opacity-100 ${currentVariant.controls}`}
            aria-label="Slide trước"
          >
            <svg className="size-7 sm:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(activeSlide + 1)}
            className={`absolute top-1/2 right-3 sm:right-4 z-10 -translate-y-1/2 flex size-12 sm:size-14 items-center justify-center rounded-full border border-transparent transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 opacity-90 hover:opacity-100 ${currentVariant.controls}`}
            aria-label="Slide tiếp theo"
          >
            <svg className="size-7 sm:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>}
        {variant === "hero" && <span className="absolute top-5 right-5 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">{activeSlide + 1} / {items.length}</span>}
      </div>
      {showIndicators && items.length > 1 && (
        <div className={`flex justify-center gap-2 bg-transparent ${currentVariant.indicators}`} role="tablist" aria-label="Chọn slide">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                activeSlide === index
                  ? `w-10 ${currentVariant.activeDot}`
                  : `w-2.5 ${currentVariant.dot}`
              }`}
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
