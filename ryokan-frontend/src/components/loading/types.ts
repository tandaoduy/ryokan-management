export type LoadingSize = "sm" | "md" | "lg";
export type LoadingLayout = "horizontal" | "vertical";

export type LoadingProps = {
  label?: string;
  size?: LoadingSize;
  layout?: LoadingLayout;
  className?: string;
};

export type LoadingContextValue = {
  defaultSize: LoadingSize;
};
