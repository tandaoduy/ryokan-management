import type { TableProps } from "./types";

const variantConfig = {
  grid: {
    header: "bg-slate-100 dark:bg-slate-800",
    headerRow: "divide-x divide-slate-200 dark:divide-slate-700/80",
    bodyRow: "divide-x divide-slate-200 bg-white hover:bg-indigo-50/70 dark:divide-slate-700/70 dark:bg-slate-900 dark:hover:bg-indigo-500/10",
  },
  striped: {
    header: "bg-slate-100 dark:bg-slate-800",
    headerRow: "",
    bodyRow: "bg-white even:bg-slate-50/70 hover:bg-indigo-50/70 dark:bg-slate-900 dark:even:bg-slate-800/30 dark:hover:bg-indigo-500/10",
  },
  minimal: {
    header: "bg-transparent",
    headerRow: "",
    bodyRow: "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50",
  },
};

const densityConfig = {
  compact: { header: "px-4 py-2.5", cell: "px-4 py-3" },
  comfortable: { header: "px-5 py-3.5", cell: "px-5 py-4" },
};

export function Table<T>({
  columns,
  data,
  getRowKey,
  emptyMessage = "Chưa có dữ liệu.",
  variant = "grid",
  density = "comfortable",
  className = "",
}: TableProps<T>) {
  const currentVariant = variantConfig[variant];
  const currentDensity = densityConfig[density];

  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-950/5 dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-black/20 ${className}`}>
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700/80">
        <thead className={`${currentVariant.header} text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200`}>
          <tr className={currentVariant.headerRow}>{columns.map((column) => <th key={column.key} scope="col" className={`whitespace-nowrap ${currentDensity.header} ${column.className ?? ""}`}>{column.header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700 dark:divide-slate-700/70 dark:text-slate-200">
          {data.map((row) => (
            <tr key={getRowKey(row)} className={`${currentVariant.bodyRow} transition-colors`}>
              {columns.map((column) => <td key={column.key} className={`${currentDensity.cell} ${column.className ?? ""}`}>{column.render(row)}</td>)}
            </tr>
          ))}
          {data.length === 0 && <tr><td colSpan={columns.length} className="px-5 py-12 text-center text-slate-500 dark:text-slate-400">{emptyMessage}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
