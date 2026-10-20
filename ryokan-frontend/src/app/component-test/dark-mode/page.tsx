import { Card, DarkMode } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function DarkModeTestPage() {
  return <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-8"><div className="mx-auto max-w-5xl"><TestPageLayout title="Dark mode" description="Chuyển giao diện và tải lại trang để kiểm tra lựa chọn được lưu."><Card title="Tùy chọn giao diện" description="Nút này dùng DarkModeProvider đã được đặt ở root layout."><div className="flex flex-wrap items-center justify-between gap-5 rounded-xl bg-slate-100 p-5 dark:bg-slate-800"><div><p className="font-semibold text-slate-900 dark:text-slate-100">Giao diện hệ thống</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Thay đổi được lưu ngay trong trình duyệt.</p></div><DarkMode /></div></Card></TestPageLayout></div></main>;
}
