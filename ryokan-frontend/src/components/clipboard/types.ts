import type { ReactNode } from "react";

export type ClipboardVariant = "default" | "outline" | "ghost";
export type ClipboardSize = "sm" | "md";
export type ClipboardProps = { value: string; label?: string; copiedLabel?: string; variant?: ClipboardVariant; size?: ClipboardSize; showIcon?: boolean; iconOnly?: boolean; title?: string; onCopy?: (value: string) => void; onError?: () => void; className?: string };
export type ClipboardFieldProps = { value: string; label?: string; prefix?: ReactNode; helperText?: string; copyLabel?: string; className?: string };
export type ClipboardContextValue = { defaultVariant: ClipboardVariant };
