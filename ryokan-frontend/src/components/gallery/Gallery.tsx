import type { GalleryProps } from "./types";
const variantClass = { grid: "grid-cols-2 md:grid-cols-3", featured: "grid-cols-2 md:grid-cols-4 [&>*:first-child]:col-span-2 [&>*:first-child]:row-span-2", masonry: "columns-2 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid" };
export function Gallery({ items, variant = "grid", className = "" }: GalleryProps) { return <div className={`gap-4 ${variant === "masonry" ? "block" : "grid"} ${variantClass[variant]} ${className}`}>{items.map((item, index) => <div key={index} className="overflow-hidden rounded-2xl">{item}</div>)}</div>; }
