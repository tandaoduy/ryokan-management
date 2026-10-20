"use client";

import { useContext } from "react";
import { LoadingContext } from "./LoadingProvider";

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading must be used inside LoadingProvider.");
  return context;
}
