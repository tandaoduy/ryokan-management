"use client";

import { useId, useState } from "react";
import type {
  RatingAdvancedProps,
  RatingCommentProps,
  RatingProps,
  RatingReviewCardProps,
  RatingScoreProps,
  RatingSize,
} from "./types";

export type {
  RatingAdvancedDistribution,
  RatingAdvancedProps,
  RatingCommentProps,
  RatingProps,
  RatingReviewCardProps,
  RatingReviewDetail,
  RatingScoreCategory,
  RatingScoreProps,
  RatingSize,
} from "./types";

function getSizeClass(size: RatingSize = "md"): string {
  switch (size) {
    case "sm":
      return "size-4";
    case "lg":
      return "size-6";
    case "xl":
      return "size-7";
    case "md":
    default:
      return "size-5";
  }
}

// Single Star component with partial fill support
function StarIcon({
  fillPercentage = 100,
  sizeClass = "size-5",
  className = "",
}: {
  fillPercentage?: number; // 0 to 100
  sizeClass?: string;
  className?: string;
}) {
  const clipId = useId();

  if (fillPercentage >= 100) {
    return (
      <svg
        className={`${sizeClass} shrink-0 text-amber-400 ${className}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
      </svg>
    );
  }

  if (fillPercentage <= 0) {
    return (
      <svg
        className={`${sizeClass} shrink-0 text-slate-300 dark:text-slate-600 ${className}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
      </svg>
    );
  }

  // Fractional star using SVG clipPath
  return (
    <svg
      className={`${sizeClass} shrink-0 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={`${fillPercentage * 0.24}`} height="24" />
        </clipPath>
      </defs>
      {/* Background empty star */}
      <path
        className="text-slate-300 dark:text-slate-600"
        fill="currentColor"
        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
      />
      {/* Foreground filled portion */}
      <path
        clipPath={`url(#${clipId})`}
        className="text-amber-400"
        fill="currentColor"
        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
      />
    </svg>
  );
}

// 1. Main Rating Component
export function Rating({
  value = 0,
  max = 5,
  size = "md",
  interactive = false,
  onChange,
  showText = false,
  text,
  showCount = false,
  count,
  countHref = "#",
  onCountClick,
  className = "",
  starClassName = "",
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(value);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const displayValue = interactive
    ? hoveredValue !== null
      ? hoveredValue
      : internalValue
    : value;

  const sizeClass = getSizeClass(size);

  const handleStarClick = (idx: number) => {
    if (!interactive) return;
    setInternalValue(idx);
    onChange?.(idx);
  };

  // Special compact mode: showCount (e.g. ★ 4.95 • 73 đánh giá)
  if (showCount) {
    return (
      <div className={`flex items-center text-sm ${className}`}>
        <StarIcon fillPercentage={100} sizeClass={sizeClass} className={starClassName} />
        <span className="ms-1.5 font-bold text-slate-900 dark:text-white">
          {value.toFixed(2)}
        </span>
        <span className="mx-2 size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
        <a
          href={countHref}
          onClick={onCountClick}
          className="font-medium text-slate-700 underline hover:no-underline dark:text-slate-300"
        >
          {count ?? 0} đánh giá
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* Stars cluster */}
      <div
        className="flex items-center gap-1"
        onMouseLeave={() => interactive && setHoveredValue(null)}
        role={interactive ? "radiogroup" : undefined}
        aria-label={`${displayValue} trên ${max} sao`}
      >
        {Array.from({ length: max }, (_, i) => {
          const starNumber = i + 1;
          const fillPercentage = Math.max(
            0,
            Math.min(100, (displayValue - i) * 100)
          );

          if (interactive) {
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleStarClick(starNumber)}
                onMouseEnter={() => setHoveredValue(starNumber)}
                className="cursor-pointer transition-transform hover:scale-115 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                aria-label={`${starNumber} sao`}
              >
                <StarIcon
                  fillPercentage={hoveredValue !== null ? (starNumber <= hoveredValue ? 100 : 0) : fillPercentage}
                  sizeClass={sizeClass}
                  className={starClassName}
                />
              </button>
            );
          }

          return (
            <StarIcon
              key={i}
              fillPercentage={fillPercentage}
              sizeClass={sizeClass}
              className={starClassName}
            />
          );
        })}
      </div>

      {/* Optional Text (e.g. 4.95 trên 5 sao) */}
      {showText && (
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {text ?? `${value.toFixed(2)} trên ${max} sao`}
        </span>
      )}
    </div>
  );
}

// 2. Advanced Rating Breakdown (5 star: 70%, 4 star: 17%, etc.)
export function RatingAdvanced({
  rating,
  totalRatings,
  distribution,
  className = "",
}: RatingAdvancedProps) {
  return (
    <div className={`w-full max-w-md ${className}`}>
      {/* Aggregate Header */}
      <div className="flex items-center gap-2 mb-1">
        <Rating value={rating} size="md" />
        <span className="text-sm font-bold text-slate-900 dark:text-white">
          {rating.toFixed(2)} trên 5
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
        {totalRatings.toLocaleString()} lượt đánh giá toàn cầu
      </p>

      {/* Distribution Bars */}
      <div className="space-y-2.5">
        {distribution.map((item) => (
          <div key={item.stars} className="flex items-center text-xs">
            <span className="w-12 font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300">
              {item.stars} sao
            </span>
            <div className="mx-3 h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, item.percentage))}%` }}
              />
            </div>
            <span className="w-9 text-right font-semibold text-slate-700 dark:text-slate-300">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Score Rating (e.g. 8.7 Xuất sắc + Category Breakdown)
export function RatingScore({
  score,
  maxScore = 10,
  label = "Xuất sắc",
  totalReviews,
  readAllReviewsHref = "#",
  onReadAllReviews,
  categories,
  className = "",
}: RatingScoreProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Overall Score Header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center justify-center rounded-xl bg-indigo-50 px-2.5 py-1 text-base font-bold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
          {score.toFixed(1)}
        </div>
        <span className="text-base font-bold text-slate-900 dark:text-white">
          {label}
        </span>
        {totalReviews !== undefined && (
          <>
            <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {totalReviews} đánh giá
            </span>
          </>
        )}
        <a
          href={readAllReviewsHref}
          onClick={onReadAllReviews}
          className="ms-auto text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Xem tất cả đánh giá →
        </a>
      </div>

      {/* 2-column Grid of Categories */}
      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {categories.map((cat) => {
          const catMax = cat.maxScore ?? maxScore;
          const percent = Math.min(100, (cat.score / catMax) * 100);

          return (
            <div key={cat.label} className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-700 dark:text-slate-300">
                  {cat.label}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {cat.score.toFixed(1)}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 4. Rating Comment (Review with avatar, stars, headline, body, and helpful button)
export function RatingComment({
  author,
  rating,
  title,
  content,
  helpfulCount = 0,
  onHelpful,
  onReport,
  className = "",
}: RatingCommentProps) {
  const [helpful, setHelpful] = useState(helpfulCount);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (!voted) {
      setHelpful((prev) => prev + 1);
      setVoted(true);
      onHelpful?.();
    }
  };

  return (
    <article className={`space-y-3 text-sm ${className}`}>
      {/* Author Bar */}
      <div className="flex items-center gap-3">
        {author.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={author.avatarUrl}
            alt={author.name}
            className="size-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 font-bold text-white text-xs">
            {author.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            {author.name}
          </h4>
          {author.joinedDate && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tham gia {author.joinedDate}
            </p>
          )}
        </div>
      </div>

      {/* Star Rating & Title */}
      <div className="flex items-center gap-2.5">
        <Rating value={rating} size="sm" />
        {title && (
          <h5 className="font-bold text-slate-900 dark:text-white">
            {title}
          </h5>
        )}
      </div>

      {author.date && (
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Đánh giá ngày {author.date}
        </p>
      )}

      {/* Review Content */}
      <div className="leading-relaxed text-slate-700 dark:text-slate-300">
        {content}
      </div>

      {/* Helpful Actions */}
      <div className="flex items-center gap-4 pt-1 text-xs">
        <span className="text-slate-500 dark:text-slate-400">
          {helpful} người thấy hữu ích
        </span>
        <button
          type="button"
          onClick={handleVote}
          disabled={voted}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-700 shadow-xs hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {voted ? "Đã cảm ơn" : "Hữu ích"}
        </button>
        <button
          type="button"
          onClick={onReport}
          className="border-s border-slate-200 ps-4 text-slate-500 hover:text-rose-600 dark:border-slate-800 dark:text-slate-400"
        >
          Báo cáo vi phạm
        </button>
      </div>
    </article>
  );
}

// 5. Rating Review Card (3-column layout with details)
export function RatingReviewCard({
  author,
  details,
  review,
  helpfulCount = 0,
  onHelpful,
  onNotHelpful,
  className = "",
}: RatingReviewCardProps) {
  return (
    <article className={`grid gap-6 md:grid-cols-3 ${className}`}>
      {/* Left Column: Author & Trip Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {author.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="size-11 rounded-full object-cover"
            />
          ) : (
            <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 font-bold text-white text-xs">
              {author.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">
              {author.name}
            </h4>
            {author.country && (
              <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                {author.countryFlag && <span>{author.countryFlag}</span>}
                {author.country}
              </p>
            )}
          </div>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
          {details.map((d, i) => (
            <li key={i} className="flex items-center gap-2">
              {d.icon && <span className="text-slate-400">{d.icon}</span>}
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Review Details & Score */}
      <div className="md:col-span-2 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            {review.date && (
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
                Đánh giá vào {review.date}
              </p>
            )}
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {review.title}
            </h3>
          </div>
          <div className="rounded-xl bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 shrink-0">
            {review.score.toFixed(1)}
          </div>
        </div>

        <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {review.content}
        </div>

        <div className="flex items-center gap-4 pt-2 text-xs">
          <button
            type="button"
            onClick={onHelpful}
            className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            <span>👍</span> Hữu ích ({helpfulCount})
          </button>
          <button
            type="button"
            onClick={onNotHelpful}
            className="inline-flex items-center gap-1.5 font-semibold text-slate-500 hover:underline dark:text-slate-400"
          >
            <span>👎</span> Không hữu ích
          </button>
        </div>
      </div>
    </article>
  );
}
