import { Children, cloneElement, isValidElement, type ReactElement } from "react";
import type { ButtonGroupProps } from "./types";

type GroupChildProps = { className?: string };

export function ButtonGroup({ children, orientation = "horizontal", ariaLabel = "Nhóm nút", className = "" }: ButtonGroupProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<GroupChildProps>[];
  const vertical = orientation === "vertical";

  return <div role="group" aria-label={ariaLabel} className={`inline-flex ${vertical ? "flex-col" : "flex-row"} ${className}`}>{items.map((child, index) => {
    const first = index === 0;
    const last = index === items.length - 1;
    const edges = vertical
      ? `${first ? "!rounded-b-none" : last ? "!rounded-t-none" : "!rounded-none"} ${first ? "!border-b-0" : "!border-t-0"}`
      : `${first ? "!rounded-r-none" : last ? "!rounded-l-none" : "!rounded-none"} ${first ? "!border-r-0" : "!border-l-0"}`;
    return cloneElement(child, { className: `${child.props.className ?? ""} ${edges}`.trim() });
  })}</div>;
}
