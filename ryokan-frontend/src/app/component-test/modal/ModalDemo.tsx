"use client";

import { useState } from "react";
import { Card, Modal, type ModalTheme, type ModalVariant } from "../../../components";

export function ModalDemo() {
  const [activeModal, setActiveModal] = useState<ModalVariant | null>(null);
  const [theme, setTheme] = useState<ModalTheme>("dark");
  const close = () => setActiveModal(null);
  const secondaryButton = theme === "dark"
    ? "rounded-md border border-[#F7F3EB]/35 px-4 py-2 text-sm font-semibold text-[#F7F3EB] hover:bg-[#F7F3EB]/10"
    : "rounded-md border border-[#9A704A]/60 px-4 py-2 text-sm font-semibold text-[#242521] hover:bg-white/50";

  return (
    <Card title="Modal Ryokan" description="Ba ngữ cảnh thường gặp trong hành trình lưu trú. Đóng bằng nút, click nền hoặc phím Escape.">
      <div className="mb-5 inline-flex rounded-md border border-[#9A704A]/40 p-1">
        <button onClick={() => setTheme("dark")} className={`rounded px-3 py-1.5 text-sm font-semibold transition ${theme === "dark" ? "bg-[#242521] text-[#F7F3EB]" : "text-slate-600 hover:bg-slate-100"}`}>Dark mode</button>
        <button onClick={() => setTheme("light")} className={`rounded px-3 py-1.5 text-sm font-semibold transition ${theme === "light" ? "bg-[#F7F3EB] text-[#242521] shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}>Light mode</button>
      </div>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setActiveModal("reservation")} className="rounded-md bg-[#284B3B] px-4 py-2 text-sm font-semibold text-[#F7F3EB] transition hover:bg-[#203d30]">Đặt phòng</button>
        <button onClick={() => setActiveModal("welcome")} className="rounded-md bg-[#C36A52] px-4 py-2 text-sm font-semibold text-[#F7F3EB] transition hover:bg-[#aa5944]">Chào đón khách</button>
        <button onClick={() => setActiveModal("onsen")} className="rounded-md bg-[#9A704A] px-4 py-2 text-sm font-semibold text-[#F7F3EB] transition hover:bg-[#805c3d]">Lịch onsen</button>
      </div>

      <Modal open={activeModal === "reservation"} onClose={close} title="Xác nhận đặt phòng" variant="reservation" theme={theme} footer={<><button onClick={close} className={secondaryButton}>Quay lại</button><button onClick={close} className="rounded-md bg-[#284B3B] px-4 py-2 text-sm font-semibold text-[#F7F3EB] hover:bg-[#203d30]">Xác nhận</button></>}>
        <p>Phòng Sakura cho 2 khách, 12–14 tháng 10. Chúng tôi sẽ giữ phòng trong 15 phút.</p>
      </Modal>

      <Modal open={activeModal === "welcome"} onClose={close} title="Chào mừng đến Ryokan" variant="welcome" theme={theme} footer={<button onClick={close} className="rounded-md bg-[#C36A52] px-4 py-2 text-sm font-semibold text-[#F7F3EB] hover:bg-[#aa5944]">Bắt đầu hành trình</button>}>
        <p>Phòng của bạn đã sẵn sàng. Mời dùng trà xanh tại sảnh trước khi nhận chìa khóa.</p>
      </Modal>

      <Modal open={activeModal === "onsen"} onClose={close} title="Nhắc lịch onsen" variant="onsen" theme={theme} footer={<><button onClick={close} className={secondaryButton}>Để sau</button><button onClick={close} className="rounded-md bg-[#9A704A] px-4 py-2 text-sm font-semibold text-[#F7F3EB] hover:bg-[#805c3d]">Xem hướng dẫn</button></>}>
        <p>Onsen ngoài trời mở từ 16:00. Khăn tắm và yukata đã được chuẩn bị trong phòng.</p>
      </Modal>
    </Card>
  );
}
