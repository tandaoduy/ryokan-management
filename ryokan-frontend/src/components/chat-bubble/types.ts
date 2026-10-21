import type { ReactNode } from "react";
export type ChatBubbleProps = { children: ReactNode; direction?: "incoming" | "outgoing"; variant?: "default" | "accent" | "outlined"; sender?: string; timestamp?: string; className?: string };
