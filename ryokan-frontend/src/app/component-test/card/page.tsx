import { Card } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function CardTestPage() {
  return (
    <TestPageLayout title="Card" description="Kiểm thử card có tiêu đề, mô tả, action và nội dung ở cả light và dark mode.">
      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Phòng sẵn sàng"
          description="Cập nhật lúc 10:30"
          actions={<button className="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">Chi tiết</button>}
        >
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">12</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">phòng có thể nhận khách hôm nay</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Card không có header</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Dùng cho bất kỳ nội dung tùy biến nào trong hệ thống.</p>
        </Card>
      </div>
    </TestPageLayout>
  );
}
