import { Card, Loading } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function LoadingTestPage() {
  return (
    <TestPageLayout
      title="Loading (Vòng tròn dấu chấm)"
      description="Vòng tròn đứng yên, với 8 dấu chấm sáng mờ tuần tự để thể hiện tiến trình xử lý."
    >
      <div className="flex flex-col gap-6">
        <Card title="Các kích thước (Dạng ngang)">
          <div className="flex flex-col gap-6 py-2">
            <div>
              <div className="text-xs text-slate-500 mb-2 font-medium">Nhỏ (sm):</div>
              <Loading size="sm" label="Đang kiểm tra phòng trống..." />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-2 font-medium">Trung bình (md - mặc định):</div>
              <Loading size="md" label="Đang đồng bộ dữ liệu Onsen..." />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-2 font-medium">Lớn (lg):</div>
              <Loading size="lg" label="Đang khởi tạo hoá đơn đặt phòng..." />
            </div>
          </div>
        </Card>

        <Card title="Dạng dọc (Vertical layout - Cho Modal / Card / Full page)">
          <div className="flex flex-wrap items-center justify-around gap-8 py-4">
            <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <Loading size="md" layout="vertical" label="Đang chuẩn bị phòng Ryokan..." />
            </div>
            <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <Loading size="lg" layout="vertical" label="Đang lưu thông tin khách hàng..." />
            </div>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
