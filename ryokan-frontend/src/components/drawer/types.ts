import type { ReactNode } from "react";
export type DrawerProps = { open: boolean; onClose: () => void; title?: string; children: ReactNode; side?: "left" | "right" | "bottom"; size?: "sm" | "md" | "lg"; className?: string };
