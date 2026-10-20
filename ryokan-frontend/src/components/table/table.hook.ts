"use client";

import { useContext } from "react";
import { TableContext } from "./TableProvider";

export function useTable() {
  const context = useContext(TableContext);
  if (!context) throw new Error("useTable must be used inside TableProvider.");
  return context;
}
