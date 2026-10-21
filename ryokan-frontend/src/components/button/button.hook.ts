"use client";

import { useContext } from "react";
import { ButtonContext } from "./ButtonProvider";

export function useButton() {
  return useContext(ButtonContext);
}
