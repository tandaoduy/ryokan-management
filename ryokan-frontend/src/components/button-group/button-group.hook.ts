"use client";

import { useContext } from "react";
import { ButtonGroupContext } from "./ButtonGroupProvider";

export function useButtonGroup() {
  return useContext(ButtonGroupContext);
}
