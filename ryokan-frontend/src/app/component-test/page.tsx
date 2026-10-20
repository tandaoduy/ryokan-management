import Link from "next/link";

const components = [
  { href: "/component-test/alert", name: "Alert", description: "Thông báo success, error, warning và info.", icon: "!" },
  { href: "/component-test/card", name: "Card", description: "Khung nội dung, tiêu đề và vùng hành động.", icon: "▣" },
  { href: "/component-test/loading", name: "Loading", description: "Spinner với các kích thước khác nhau.", icon: "◌" },
  { href: "/component-test/modal", name: "Modal", description: "Hộp thoại tương tác và trạng thái mở/đóng.", icon: "□" },
  { href: "/component-test/table", name: "Table", description: "Bảng dữ liệu generic và trạng thái rỗng.", icon: "▤" },
];

export default function ComponentTestPage() {
  return <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8"><div className="mx-auto max-w-5xl"><header className="mb-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Ryokan UI Kit</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Component playground</h1><p className="mt-2 max-w-2xl text-slate-600">Chọn một component để mở trang test độc lập, kiểm tra trạng thái và cách hiển thị.</p></header><section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{components.map((component) => <Link key={component.href} href={component.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"><span className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">{component.icon}</span><h2 className="mt-5 text-lg font-semibold text-slate-900">{component.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{component.description}</p><span className="mt-5 inline-block text-sm font-semibold text-indigo-600">Mở trang test →</span></Link>)}</section></div></main>;
}
