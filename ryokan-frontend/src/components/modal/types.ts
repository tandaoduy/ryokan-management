import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg";
export type ModalProps = { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; size?: ModalSize };
export type ModalContextValue = { defaultSize: ModalSize };
