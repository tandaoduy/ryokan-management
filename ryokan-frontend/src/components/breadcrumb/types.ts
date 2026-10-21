import type { ReactNode } from "react";

export type BreadcrumbVariant = "default" | "compact" | "pill" | "solid";
export type BreadcrumbItem = { label: string; href?: string; icon?: ReactNode; badge?: ReactNode };
export type BreadcrumbProps = { items: BreadcrumbItem[]; variant?: BreadcrumbVariant; separator?: ReactNode; showHomeIcon?: boolean; className?: string };
export type BreadcrumbContextValue = { defaultVariant: BreadcrumbVariant };
