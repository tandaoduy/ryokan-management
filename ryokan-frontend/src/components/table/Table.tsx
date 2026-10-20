import type { TableProps } from "./types";

export function Table<T>({ columns, data, getRowKey, emptyMessage = "Chưa có dữ liệu.", className = "" }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 ${className}`}>
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <tr>{columns.map((column) => <th key={column.key} className={`px-4 py-3 ${column.className ?? ""}`}>{column.header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white text-slate-700 dark:divide-slate-800 dark:bg-slate-900 dark:text-slate-200">
          {data.map((row) => (
            <tr key={getRowKey(row)} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70">
              {columns.map((column) => <td key={column.key} className={`px-4 py-3.5 ${column.className ?? ""}`}>{column.render(row)}</td>)}
            </tr>
          ))}
          {data.length === 0 && <tr><td colSpan={columns.length} className="px-4 py-10 text-center text-slate-500 dark:text-slate-400">{emptyMessage}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
