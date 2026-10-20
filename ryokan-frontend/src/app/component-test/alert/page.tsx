"use client";

import { Alert } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function AlertTestPage() {
  return (
    <TestPageLayout
      title="Alert"
      description="Hiển thị thông báo theo phong cách hiện đại với halo icon, viền màu sắc và nút đóng."
    >
      <div className="space-y-8">
        {/* 4 Trạng thái chuẩn */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Các trạng thái thông báo
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Alert variant="success" title="Đặt phòng thành công">
              Mã đặt phòng RSV-001 đã được gửi đến khách lưu trú.
            </Alert>
            <Alert variant="error" title="Thanh toán thất bại">
              Vui lòng kiểm tra lại phương thức thanh toán của bạn.
            </Alert>
            <Alert variant="warning" title="Phòng sắp hết">
              Chỉ còn 1 phòng Washitsu truyền thống cho ngày đã chọn.
            </Alert>
            <Alert variant="info" title="Thông tin onsen">
              Onsen riêng tư cần được đặt trước 30 phút.
            </Alert>
          </div>
        </section>

        {/* Mẫu theo guideline mẫu */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Mẫu tham chiếu (Guideline Do)
          </h2>
          <div className="max-w-xl">
            <Alert variant="info" title="Password Expiring Soon">
              Your password expires in 5 days. Update it in settings.
            </Alert>
          </div>
        </section>
      </div>
    </TestPageLayout>
  );
}
