"use client";

import { useContext } from "react";
import { CardContext } from "./CardProvider";

export function useCard() {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCard must be used inside CardProvider.");
  return context;
}
