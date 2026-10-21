import type { ChatBubbleProps } from "./types";

export function ChatBubble({ children, direction = "incoming", variant = "default", sender, timestamp, className = "" }: ChatBubbleProps) {
  const outgoing = direction === "outgoing";
  const tone = variant === "outlined" ? "border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" : outgoing ? (variant === "accent" ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20" : "bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900") : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100";
  return <div className={`flex flex-col ${outgoing ? "items-end" : "items-start"} ${className}`}>{sender && <span className="mb-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{sender}</span>}<div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${outgoing ? "rounded-tr-md" : "rounded-tl-md"} ${tone}`}>{children}</div>{timestamp && <span className="mt-1 text-xs text-slate-400 dark:text-slate-500">{timestamp}</span>}</div>;
}
