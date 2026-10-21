"use client";

import { useContext } from "react";
import { ClipboardContext } from "./ClipboardProvider";

export function useClipboard() { return useContext(ClipboardContext); }
