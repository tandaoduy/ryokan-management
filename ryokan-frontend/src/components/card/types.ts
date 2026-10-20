import type { ReactNode } from "react";

export type CardProps = { children: ReactNode; className?: string; title?: string; description?: string; actions?: ReactNode };
export type CardContextValue = { defaultClassName: string };
