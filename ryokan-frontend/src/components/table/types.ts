import type { ReactNode } from "react";

export type TableColumn<T> = { key: string; header: string; className?: string; render: (row: T) => ReactNode };
export type TableVariant = "grid" | "striped" | "minimal";
export type TableDensity = "compact" | "comfortable";

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T) => string;
  emptyMessage?: string;
  variant?: TableVariant;
  density?: TableDensity;
  className?: string;
};
export type TableContextValue = { emptyMessage: string };
