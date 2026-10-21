import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg";
export type ModalVariant = "reservation" | "welcome" | "onsen";
export type ModalTheme = "light" | "dark";
export type ModalProps = { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; size?: ModalSize; variant?: ModalVariant; theme?: ModalTheme };
export type ModalContextValue = { defaultSize: ModalSize };
