"use client";

import { Alert } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function AlertTestPage() {
  return (
    <TestPageLayout
      title="Alert (旅館・和風スタイル)"
      description="Component thông báo chuẩn phong cách Ryokan Nhật Bản: Bảng màu truyền thống Nippon, dấu triện Hanko, nẹp viền Tatami-heri và họa tiết phong cảnh Nhật Bản mộc mạc."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
              Các trạng thái thông báo Ryokan
            </h2>
            <span className="text-xs text-stone-400">Phong cách Wabi-sabi & Omotenashi</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Alert
              variant="success"
              title="Đặt phòng thành công"
              action={
                <button
                  type="button"
                  className="text-xs font-semibold text-[#245238] hover:underline"
                  onClick={() => alert("Mở chi tiết đặt phòng")}
                >
                  Xem chi tiết lịch lưu trú →
                </button>
              }
            >
              Mã đặt phòng RSV-001 đã được xác nhận. Chúng tôi rất hân hạnh được đón tiếp quý khách.
            </Alert>

            <Alert
              variant="error"
              title="Thanh toán thất bại"
              action={
                <button
                  type="button"
                  className="rounded bg-[#A32E35] px-2.5 py-1 text-xs font-medium text-white shadow-xs hover:bg-[#8B1E22] transition"
                  onClick={() => alert("Thử thanh toán lại")}
                >
                  Thử lại phương thức khác
                </button>
              }
            >
              Giao dịch qua thẻ bị gián đoạn. Vui lòng kiểm tra lại thông tin thẻ thanh toán của bạn.
            </Alert>

            <Alert
              variant="warning"
              title="Phòng sắp hết"
              action={
                <button
                  type="button"
                  className="text-xs font-semibold text-[#7A5005] hover:underline"
                  onClick={() => alert("Giữ phòng nhanh")}
                >
                  Giữ phòng ngay →
                </button>
              }
            >
              Chỉ còn đúng 1 phòng Washitsu nhìn ra vườn thiền cho ngày đã chọn.
            </Alert>

            <Alert
              variant="info"
              title="Thông tin onsen"
              action={
                <button
                  type="button"
                  className="text-xs font-semibold text-[#1A4B72] hover:underline"
                  onClick={() => alert("Xem lịch onsen")}
                >
                  Quy định tắm khoáng →
                </button>
              }
            >
              Bể onsen riêng tư cần được đặt trước 30 phút để chuẩn bị nước khoáng thiên nhiên nóng ấm.
            </Alert>
          </div>
        </section>
      </div>
    </TestPageLayout>
  );
}
