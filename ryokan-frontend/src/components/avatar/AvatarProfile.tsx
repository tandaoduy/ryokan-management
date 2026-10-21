import { Avatar } from "./Avatar";
import type { AvatarProfileProps } from "./types";

export function AvatarProfile({ name, subtitle, className = "", ...avatarProps }: AvatarProfileProps) {
  return <div className={`flex items-center gap-3 ${className}`}><Avatar name={name} {...avatarProps} /><div><p className="font-semibold text-slate-900 dark:text-white">{name}</p>{subtitle && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}</div></div>;
}
