import { Avatar, Badge, Button, Card } from "../../../components";
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

        <Card title="Kaiseki theo mùa" description="Thực đơn thay đổi mỗi ngày từ nguyên liệu địa phương." media={<div className="flex h-full min-h-40 items-end bg-gradient-to-br from-orange-400 via-amber-500 to-rose-600 p-5"><Badge variant="warning" appearance="soft">Ẩm thực</Badge></div>} actions={<Badge variant="success" size="sm">Còn chỗ</Badge>}>
          <Button size="sm" rightIcon={<span aria-hidden="true">→</span>}>Xem thực đơn</Button>
        </Card>

        <Card variant="interactive" mediaPosition="left" media={<div className="flex h-full min-h-40 items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700 text-5xl">♨</div>} title="Onsen riêng tư" description="Không gian thư giãn dành riêng cho tối đa bốn khách.">
          <div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Từ 1.200.000 ₫</span><Button size="sm" appearance="outline">Đặt lịch</Button></div>
        </Card>

        <Card mediaPosition="right" media={<div className="h-full min-h-40 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 p-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">Review</p><p className="mt-6 text-4xl font-bold text-white">4.9</p><p className="mt-1 text-sm text-slate-300">/ 5.0 điểm</p></div>} title="Trải nghiệm được yêu thích" description="98% khách sẵn sàng giới thiệu Ryokan cho bạn bè.">
          <a href="#card-demo" className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-300">Đọc nhận xét →</a>
        </Card>
      </div>
    </TestPageLayout>
  );
}
