export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "away" | "busy" | "offline";
export type AvatarShape = "circle" | "rounded" | "square";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  shape?: AvatarShape;
  className?: string;
};
