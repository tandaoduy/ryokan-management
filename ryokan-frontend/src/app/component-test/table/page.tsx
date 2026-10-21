import { Card, Table, type TableColumn } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

type Reservation = { id: string; guest: string; room: string; stay: string; status: "Đã xác nhận" | "Chờ thanh toán" | "Đã check-in" };

const reservations: Reservation[] = [
  { id: "RSV-001", guest: "Nguyễn Minh Anh", room: "Sakura 201", stay: "20–22/10/2026", status: "Đã xác nhận" },
  { id: "RSV-002", guest: "Trần Nhật Nam", room: "Fuji 102", stay: "21–23/10/2026", status: "Chờ thanh toán" },
  { id: "RSV-003", guest: "Yuki Tanaka", room: "Kumo 305", stay: "19–21/10/2026", status: "Đã check-in" },
];

const statusStyle = {
  "Đã xác nhận": "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Chờ thanh toán": "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  "Đã check-in": "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
};

const columns: TableColumn<Reservation>[] = [
  { key: "id", header: "Mã đặt phòng", render: (row) => <span className="font-semibold text-slate-900 dark:text-slate-100">{row.id}</span> },
  { key: "guest", header: "Khách lưu trú", render: (row) => <span className="font-medium">{row.guest}</span> },
  { key: "room", header: "Phòng", render: (row) => row.room },
  { key: "stay", header: "Thời gian", render: (row) => <span className="whitespace-nowrap">{row.stay}</span> },
  { key: "status", header: "Trạng thái", render: (row) => <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[row.status]}`}>{row.status}</span> },
];

export default function TableTestPage() {
  return (
    <TestPageLayout title="Table" description="Các biến thể bảng rõ nét, có hỗ trợ responsive overflow và dark mode.">
      <div className="flex flex-col gap-6">
        <Card title="Grid table" description="Mặc định — đường kẻ rõ ràng giữa mọi hàng và cột, phù hợp dữ liệu nghiệp vụ.">
          <Table columns={columns} data={reservations} getRowKey={(row) => row.id} />
        </Card>

        <Card title="Striped table" description="Hàng xen kẽ nhẹ, phù hợp danh sách dài cần quét nhanh.">
          <Table columns={columns} data={reservations} getRowKey={(row) => row.id} variant="striped" />
        </Card>

        <Card title="Minimal compact table" description="Gọn hơn, giảm đường kẻ dọc; phù hợp khu vực thông tin phụ.">
          <Table columns={columns} data={reservations} getRowKey={(row) => row.id} variant="minimal" density="compact" />
        </Card>
      </div>
    </TestPageLayout>
  );
}
