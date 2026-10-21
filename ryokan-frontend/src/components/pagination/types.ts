import type { ReactNode } from "react";

export type PaginationVariant =
  | "default"
  | "rounded"
  | "minimal"
  | "table"
  | "single";

export type PaginationSize = "sm" | "md" | "lg";

export type PaginationLayout =
  | "navigation"
  | "table"
  | "dropdown"
  | "input"
  | "grouped";

export interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  onChange?: (page: number) => void; // Backward compatibility

  variant?: PaginationVariant;
  size?: PaginationSize;
  layout?: PaginationLayout;

  showIcons?: boolean;
  showText?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  siblingCount?: number;

  // Table pagination props
  totalItems?: number;
  itemsPerPage?: number;
  onItemsPerPageChange?: (size: number) => void;
  pageSizeOptions?: number[];

  // Go to page jumper & page size selector
  showPageJumper?: boolean;
  showPageSizeSelector?: boolean;

  className?: string;
}

export interface PaginationContextValue {
  defaultVariant: PaginationVariant;
  defaultSize?: PaginationSize;
}

export interface PaginationNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: "separated" | "grouped";
  size?: PaginationSize;
  showIcons?: boolean;
  showText?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

export interface PaginationTableInfoProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  className?: string;
  labelFormat?: (start: number, end: number, total: number) => ReactNode;
}

export interface PaginationSingleProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: PaginationSize;
  className?: string;
}

export interface PaginationSelectJumperProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: PaginationSize;
  className?: string;
}
