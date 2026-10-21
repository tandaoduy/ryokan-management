import { Card, Timeline } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

const items = [
  { date: "20/10 · 10:24", title: "Đặt phòng được tạo", description: "RSV-001 cho Nguyễn Minh Anh.", status: "default" as const },
  { date: "20/10 · 10:30", title: "Đã xác nhận thanh toán", description: "Thanh toán thành công qua thẻ.", status: "success" as const },
  { date: "21/10 · 14:00", title: "Check-in dự kiến", description: "Chuẩn bị phòng Sakura 201.", status: "warning" as const },
];

export default function Page() {
  const advancedItems = items.map((item, index) => ({ ...item, icon: index === 0 ? "□" : index === 1 ? "✓" : "!", badge: index === 1 ? "Mới nhất" : undefined, action: index === 0 ? <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold dark:border-slate-600">Xem chi tiết</button> : undefined }));
  return <TestPageLayout title="Timeline" description="Mốc sự kiện dạng đầy đủ, advanced card và stepper ngang."><div className="space-y-6"><div className="grid gap-6 md:grid-cols-2"><Card title="Default"><Timeline items={items} /></Card><Card title="Advanced"><Timeline items={advancedItems} variant="advanced" /></Card></div><Card title="Stepper"><Timeline items={items} variant="stepper" /></Card></div></TestPageLayout>;
}
