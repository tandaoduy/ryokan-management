"use client";

import { useContext } from "react";
import { BreadcrumbContext } from "./BreadcrumbProvider";

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}
