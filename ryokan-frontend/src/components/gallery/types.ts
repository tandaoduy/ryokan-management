import type { ReactNode } from "react";
export type GalleryProps = { items: ReactNode[]; variant?: "grid" | "featured" | "masonry"; className?: string };
