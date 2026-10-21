export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "away" | "busy" | "offline";
export type AvatarShape = "circle" | "rounded" | "square";
export type AvatarFallback = "initials" | "icon";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  shape?: AvatarShape;
  fallback?: AvatarFallback;
  bordered?: boolean;
  tooltip?: string;
  className?: string;
};

export type AvatarProfileProps = AvatarProps & { subtitle?: string };
export type AvatarContextValue = { defaultSize: AvatarSize };
