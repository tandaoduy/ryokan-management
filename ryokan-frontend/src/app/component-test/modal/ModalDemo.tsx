"use client";

import { useState } from "react";
import { Card, Modal } from "../../../components";

export function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return <Card title="Modal tương tác" description="Thử mở, đóng bằng nút, click nền hoặc phím Escape."><button onClick={() => setIsOpen(true)} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Mở modal</button><Modal open={isOpen} onClose={() => setIsOpen(false)} title="Xác nhận đặt phòng" footer={<><button onClick={() => setIsOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Hủy</button><button onClick={() => setIsOpen(false)} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Xác nhận</button></>}><p>Đây là nội dung modal dùng chung trong hệ thống Ryokan.</p></Modal></Card>;
}
