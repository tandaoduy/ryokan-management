"use client";

import { useState } from "react";
import { Button, Card, Toast } from "../../../components";
import type { ToastPosition } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  const [activePositionToast, setActivePositionToast] = useState<{
    position: ToastPosition;
    message: string;
  } | null>(null);

  const [undoMessage, setUndoMessage] = useState<string | null>(null);

  const showPositionedToast = (position: ToastPosition) => {
    setActivePositionToast({
      position,
      message: `Thông báo xuất hiện tại vị trí: ${position}`,
    });
  };

  return (
    <TestPageLayout
      title="Toast Component (Flowbite Specification)"
      description="Thành phần thông báo nổi (Toast) theo tiêu chuẩn Flowbite: Đầy đủ các biến thể màu sắc ngữ cảnh, nút hoàn tác (Undo), tin nhắn kèm ảnh đại diện & nút trả lời, thông báo đẩy, cập nhật tương tác, thanh tiến trình và định vị đa góc màn hình."
    >
      <div className="space-y-10">
        {/* 1. Contextual Colors */}
        <Card
          title="1. Màu sắc ngữ cảnh (Contextual Colors)"
          description="Hiển thị các thông báo trạng thái phổ biến: Success (thành công), Danger (lỗi/xóa), Warning (cảnh báo) và Info (thông tin)."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Toast variant="success">
              Mục đã được di chuyển thành công.
            </Toast>
            <Toast variant="danger">
              Mục đã bị xóa khỏi hệ thống.
            </Toast>
            <Toast variant="warning">
              Vui lòng tăng độ mạnh của mật khẩu.
            </Toast>
            <Toast variant="info">
              Đã đồng bộ hóa dữ liệu mới nhất.
            </Toast>
          </div>
        </Card>

        {/* 2. Toast with Undo Button */}
        <Card
          title="2. Toast kèm nút Hoàn tác (Undo Button)"
          description="Cho phép người dùng lập tức hủy bỏ thao tác vừa thực hiện (như xóa hoặc lưu trữ thư mục)."
        >
          <div className="space-y-3">
            <Toast
              variant="default"
              undoText="Hoàn tác"
              onUndo={() => setUndoMessage("Đã hoàn tác thao tác lưu trữ thành công!")}
            >
              Cuộc trò chuyện đã được lưu trữ.
            </Toast>
            {undoMessage && (
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                {undoMessage}
              </p>
            )}
          </div>
        </Card>

        {/* 3. Message Toast with Avatar & Reply */}
        <Card
          title="3. Tin nhắn người dùng & Nút phản hồi (Toast Message & CTA)"
          description="Hiển thị tin nhắn trò chuyện hoặc bình luận mới kèm ảnh đại diện của người gửi và nút trả lời nhanh."
        >
          <div className="flex flex-wrap gap-6 items-start">
            <Toast
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              title="Ngọc Trâm"
              actionText="Trả lời"
              onAction={() => alert("Mở ô nhập phản hồi nhanh")}
            >
              Chào Neil, cảm ơn bạn đã chia sẻ đánh giá về dịch vụ Onsen tại Ryokan nhé!
            </Toast>

            <Toast
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
              title="Tuấn Khang"
              actionText="Xem chi tiết"
              onAction={() => alert("Xem phòng đặt")}
            >
              Yêu cầu đổi ngày nhận phòng của bạn đã được quản lễ tân xác nhận.
            </Toast>
          </div>
        </Card>

        {/* 4. Push Notification Toast */}
        <Card
          title="4. Thông báo đẩy (Push Notification Toast)"
          description="Huy hiệu thông báo trên đầu kèm thời gian, hình đại diện và 2 nút hành động ở chân."
        >
          <div className="flex flex-wrap gap-6 items-start">
            <Toast
              badgeText="Thông báo mới"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
              title="Mai Phương"
              timeAgo="vài giây trước"
              cancelText="Đóng"
              actionText="Phản hồi"
              onAction={() => alert("Phản hồi bình luận")}
            >
              vừa bình luận về ảnh bữa tối Kaiseki của bạn.
            </Toast>

            <Toast
              badgeText="Ưu đãi thành viên"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
              title="Ryokan Rewards"
              timeAgo="5 phút trước"
              cancelText="Để sau"
              actionText="Nhận ngay"
              onAction={() => alert("Nhận voucher giảm 20%")}
            >
              Bạn vừa nhận được voucher giảm giá 20% cho lần đặt phòng kế tiếp.
            </Toast>
          </div>
        </Card>

        {/* 5. Interactive Update Toast */}
        <Card
          title="5. Cập nhật tương tác (Interactive Toast)"
          description="Khuyến khích người dùng hành động kịp thời (như nâng cấp phiên bản phần mềm hoặc kết nối ví điện tử)."
        >
          <div className="flex flex-wrap gap-6 items-start">
            <Toast
              variant="default"
              title="Có bản cập nhật mới"
              cancelText="Để sau"
              actionText="Cập nhật"
              onAction={() => alert("Bắt đầu tải bản cập nhật...")}
            >
              Phiên bản Ryokan v2.4 đã sẵn sàng với nhiều cải tiến tốc độ vượt trội.
            </Toast>

            <Toast
              variant="info"
              title="Kết nối ví thanh toán"
              cancelText="Để sau"
              actionText="Kết nối"
              onAction={() => alert("Mở cổng liên kết ví")}
            >
              Liên kết ví thanh toán để nhận phòng nhanh không cần chờ đợi tại quầy.
            </Toast>
          </div>
        </Card>

        {/* 6. Toast with Progress Bar */}
        <Card
          title="6. Thanh tiến trình tải lên (Toast Progress Bar)"
          description="Hiển thị trạng thái tiến độ công việc đang chạy ngầm kèm phần trăm hoàn tất."
        >
          <div className="flex flex-wrap gap-6 items-start">
            <Toast
              variant="default"
              title="Đang tải tệp lên"
              progress={75}
              cancelText="Hủy tải lên"
              actionText="Xem tệp"
              onAction={() => alert("Mở danh sách tệp đính kèm")}
            >
              Vui lòng đợi trong giây lát, hợp đồng thuê phòng đang được đồng bộ hóa.
            </Toast>

            <Toast
              variant="success"
              title="Hoàn tất tải lên"
              progress={100}
              cancelText="Đóng"
              actionText="Mở tệp"
              onAction={() => alert("Mở tệp PDF")}
            >
              Hóa đơn VAT điện tử đã sẵn sàng để tải xuống.
            </Toast>
          </div>
        </Card>

        {/* 7. Full Alert Toasts */}
        <Card
          title="7. Cảnh báo toàn diện (Full Alert Toasts)"
          description="Khung thông báo màu khối nổi bật dành cho các sự cố nghiêm trọng hoặc cảnh báo bắt buộc chú ý."
        >
          <div className="flex flex-wrap gap-6 items-start">
            <Toast
              fullAlert
              variant="danger"
              title="Rất tiếc! Đã xảy ra lỗi"
              cancelText="Đóng"
              actionText="Thử lại"
              onAction={() => alert("Thử lại tải tệp")}
            >
              Định dạng tệp không được hỗ trợ. Vui lòng tải lên đúng định dạng (PDF, JPG, PNG) dưới 10MB.
            </Toast>

            <Toast
              fullAlert
              variant="warning"
              title="Xác thực thông tin hóa đơn"
              cancelText="Nhắc tôi sau"
              actionText="Tải hóa đơn"
              onAction={() => alert("Mở biểu mẫu hóa đơn")}
            >
              Vui lòng tải lên hóa đơn công ty trước ngày 25 để đảm bảo quyền lợi khấu trừ thuế.
            </Toast>
          </div>
        </Card>

        {/* 8. Fixed Positioning */}
        <Card
          title="8. Định vị cố định đa vị trí (Fixed Positioning)"
          description="Nhấn các nút bên dưới để kích hoạt Toast neo cố định ở 4 góc màn hình kèm tự động biến mất sau 3 giây."
        >
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showPositionedToast("top-right")}
            >
              Góc trên bên phải (Top-Right)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showPositionedToast("bottom-right")}
            >
              Góc dưới bên phải (Bottom-Right)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showPositionedToast("top-left")}
            >
              Góc trên bên trái (Top-Left)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showPositionedToast("bottom-left")}
            >
              Góc dưới bên trái (Bottom-Left)
            </Button>
          </div>

          {activePositionToast && (
            <Toast
              position={activePositionToast.position}
              variant="success"
              duration={3000}
              onDismiss={() => setActivePositionToast(null)}
            >
              {activePositionToast.message}
            </Toast>
          )}
        </Card>
      </div>
    </TestPageLayout>
  );
}
