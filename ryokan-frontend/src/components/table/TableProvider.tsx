"use client";

import { createContext, type ReactNode } from "react";
import type { TableContextValue } from "./types";

export const TableContext = createContext<TableContextValue | null>(null);
export function TableProvider({ children, emptyMessage = "Chưa có dữ liệu." }: { children: ReactNode; emptyMessage?: string }) {
  return <TableContext.Provider value={{ emptyMessage }}>{children}</TableContext.Provider>;
}
