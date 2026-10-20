import { Card, Table, type TableColumn } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

type Reservation = { id: string; guest: string; room: string; stay: string; status: "Đã xác nhận" | "Chờ thanh toán" | "Đã check-in" };
const reservations: Reservation[] = [{ id: "RSV-001", guest: "Nguyễn Minh Anh", room: "Sakura 201", stay: "20–22/10/2026", status: "Đã xác nhận" }, { id: "RSV-002", guest: "Trần Nhật Nam", room: "Fuji 102", stay: "21–23/10/2026", status: "Chờ thanh toán" }, { id: "RSV-003", guest: "Yuki Tanaka", room: "Kumo 305", stay: "19–21/10/2026", status: "Đã check-in" }];
const statusStyle = { "Đã xác nhận": "bg-emerald-100 text-emerald-800", "Chờ thanh toán": "bg-amber-100 text-amber-800", "Đã check-in": "bg-sky-100 text-sky-800" };
const columns: TableColumn<Reservation>[] = [{ key: "id", header: "Mã đặt phòng", render: (row) => <span className="font-medium text-slate-900">{row.id}</span> }, { key: "guest", header: "Khách lưu trú", render: (row) => row.guest }, { key: "room", header: "Phòng", render: (row) => row.room }, { key: "stay", header: "Thời gian", render: (row) => row.stay }, { key: "status", header: "Trạng thái", render: (row) => <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[row.status]}`}>{row.status}</span> }];

export default function TableTestPage() {
  return <TestPageLayout title="Table" description="Kiểm thử dữ liệu đặt phòng và responsive overflow."><Card title="Danh sách đặt phòng mẫu"><Table columns={columns} data={reservations} getRowKey={(row) => row.id} /></Card></TestPageLayout>;
}
