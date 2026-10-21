import Link from "next/link";
import { DarkMode } from "../../components";

const components = [
  { href: "/component-test/alert", name: "Alert", description: "Thông báo success, error, warning và info.", icon: "!" },
  { href: "/component-test/avatar", name: "Avatar", description: "Ảnh đại diện, fallback và trạng thái hiện diện.", icon: "●" },
  { href: "/component-test/badge", name: "Badge", description: "Nhãn trạng thái với nhiều màu và kiểu dáng.", icon: "•" },
  { href: "/component-test/banner", name: "Banner", description: "Thông báo nổi bật và hành động cần chú ý.", icon: "▰" },
  { href: "/component-test/breadcrumb", name: "Breadcrumb", description: "Điều hướng phân cấp gọn gàng.", icon: "/" },
  { href: "/component-test/card", name: "Card", description: "Khung nội dung, tiêu đề và vùng hành động.", icon: "▣" },
  { href: "/component-test/carousel", name: "Carousel", description: "Trình chiếu nội dung có điều hướng.", icon: "◫" },
  { href: "/component-test/chat-bubble", name: "Chat bubble", description: "Tin nhắn đến và đi trong hội thoại.", icon: "◌" },
  { href: "/component-test/clipboard", name: "Clipboard", description: "Nút sao chép nội dung nhanh.", icon: "⧉" },
  { href: "/component-test/date-picker", name: "Date picker", description: "Trường chọn ngày với hai bề mặt.", icon: "□" },
  { href: "/component-test/drawer", name: "Drawer", description: "Panel trượt cho ngữ cảnh phụ.", icon: "▯" },
  { href: "/component-test/dropdown", name: "Dropdown", description: "Menu nổi với nhiều kiểu hiển thị.", icon: "⌄" },
  { href: "/component-test/forms", name: "Forms", description: "Input, select, textarea và checkbox.", icon: "✎" },
  { href: "/component-test/gallery", name: "Gallery", description: "Bộ sưu tập grid, featured và masonry.", icon: "▦" },
  { href: "/component-test/dark-mode", name: "Dark mode", description: "Chuyển giao diện sáng/tối và lưu tùy chọn.", icon: "◐" },
  { href: "/component-test/loading", name: "Loading", description: "Spinner với các kích thước khác nhau.", icon: "◌" },
  { href: "/component-test/modal", name: "Modal", description: "Hộp thoại tương tác và trạng thái mở/đóng.", icon: "□" },
  { href: "/component-test/table", name: "Table", description: "Bảng dữ liệu generic và trạng thái rỗng.", icon: "▤" },
];

export default function ComponentTestPage() {
  return <main className="min-h-screen bg-slate-50 px-4 py-10 transition-colors dark:bg-slate-950 sm:px-8"><div className="mx-auto max-w-5xl"><header className="mb-8"><div className="flex items-center justify-between gap-4"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Ryokan UI Kit</p><DarkMode /></div><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Component playground</h1><p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Chọn một component để mở trang test độc lập, kiểm tra trạng thái và cách hiển thị.</p></header><section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{components.map((component) => <Link key={component.href} href={component.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500"><span className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600 dark:bg-indigo-500/15">{component.icon}</span><h2 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-100">{component.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{component.description}</p><span className="mt-5 inline-block text-sm font-semibold text-indigo-600">Mở trang test →</span></Link>)}</section></div></main>;
}
