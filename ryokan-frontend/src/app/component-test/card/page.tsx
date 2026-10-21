import { Avatar, Badge, Card } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function CardTestPage() {
  return (
    <TestPageLayout title="Card" description="Nhiều mẫu card cho dashboard, thông tin, dịch vụ và khu vực có thể tương tác.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Default card" description="Card nền cơ bản cho nội dung thông thường.">
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">12</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">phòng có thể nhận khách hôm nay</p>
        </Card>

        <Card variant="elevated" title="Elevated card" description="Nổi bật hơn trong khu vực nhiều nội dung.">
          <div className="flex items-center justify-between"><div><p className="text-3xl font-bold text-slate-900 dark:text-slate-100">86%</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">tỷ lệ lấp đầy</p></div><span className="rounded-xl bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">+12%</span></div>
        </Card>

        <Card variant="outlined" title="Outlined card" description="Nhẹ nhàng cho nội dung phụ hoặc filter.">
          <div className="flex flex-wrap gap-2"><Badge appearance="outline">Ryokan</Badge><Badge appearance="outline" variant="info">Onsen</Badge><Badge appearance="outline" variant="warning">Kaiseki</Badge></div>
        </Card>

        <Card variant="filled" title="Filled card" description="Tách vùng thông tin trong một trang dày dữ liệu.">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Lịch hôm nay</p><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">3 check-in, 2 check-out và 1 lịch onsen riêng tư.</p>
        </Card>

        <Card variant="interactive" title="Interactive card" description="Hover để nhấn mạnh nội dung có thể mở hoặc thao tác." actions={<span className="text-indigo-600 dark:text-indigo-300">→</span>}>
          <div className="flex items-center gap-3"><Avatar name="Nguyễn Minh Anh" status="online" /><div><p className="font-semibold text-slate-900 dark:text-slate-100">Nguyễn Minh Anh</p><p className="text-sm text-slate-500 dark:text-slate-400">Check-in hôm nay</p></div></div>
        </Card>

        <Card className="overflow-hidden border-indigo-500 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
          <p className="text-sm text-indigo-100">Promo card · Ưu đãi theo mùa</p><p className="mt-1 text-2xl font-bold">Ở 2 đêm, tặng 1 lượt Onsen</p><p className="mt-2 text-sm leading-6 text-indigo-100">Dùng className để tạo biến thể riêng theo chiến dịch.</p><button className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-indigo-700">Xem ưu đãi</button>
        </Card>
      </div>
    </TestPageLayout>
  );
}
