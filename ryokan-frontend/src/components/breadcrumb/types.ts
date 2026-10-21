export type BreadcrumbItem = { label: string; href?: string };
export type BreadcrumbProps = { items: BreadcrumbItem[]; variant?: "default" | "compact" | "pill"; className?: string };
