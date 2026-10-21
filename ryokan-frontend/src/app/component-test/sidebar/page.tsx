"use client";

import { useState } from "react";
import { Button, Card, Sidebar } from "../../../components";
import type { SidebarGroup, SidebarItem } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

// Standard SVG icons matching Flowbite
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
  </svg>
);

const KanbanIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  </svg>
);

const InboxIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeWidth={2} d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const ProductsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
  </svg>
);

const SignInIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
  </svg>
);

const DocsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function Page() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // 1. Default Sidebar items
  const defaultItems: SidebarItem[] = [
    { label: "Dashboard", href: "#", icon: <DashboardIcon />, active: true },
    { label: "Kanban", href: "#", icon: <KanbanIcon />, badge: "Pro", badgeColor: "default" },
    { label: "Inbox", href: "#", icon: <InboxIcon />, badge: "2", badgeColor: "danger" },
    { label: "Users", href: "#", icon: <UsersIcon /> },
    { label: "Products", href: "#", icon: <ProductsIcon /> },
    { label: "Sign In", href: "#", icon: <SignInIcon /> },
  ];

  // 2. Multi-level items
  const multiLevelItems: SidebarItem[] = [
    { label: "Dashboard", href: "#", icon: <DashboardIcon /> },
    {
      label: "E-commerce",
      icon: <ProductsIcon />,
      defaultExpanded: true,
      subItems: [
        { label: "Products", href: "#", active: true },
        { label: "Billing", href: "#" },
        { label: "Invoice", href: "#" },
      ],
    },
    { label: "Kanban", href: "#", icon: <KanbanIcon />, badge: "Pro" },
    { label: "Inbox", href: "#", icon: <InboxIcon />, badge: "2", badgeColor: "danger" },
    { label: "Users", href: "#", icon: <UsersIcon /> },
    { label: "Sign In", href: "#", icon: <SignInIcon /> },
  ];

  // 3. Separator and Groups
  const groupData: SidebarGroup[] = [
    {
      items: [
        { label: "Dashboard", href: "#", icon: <DashboardIcon />, active: true },
        {
          label: "E-commerce",
          icon: <ProductsIcon />,
          subItems: [
            { label: "Products", href: "#" },
            { label: "Billing", href: "#" },
            { label: "Invoice", href: "#" },
          ],
        },
        { label: "Kanban", href: "#", icon: <KanbanIcon />, badge: "Pro" },
        { label: "Inbox", href: "#", icon: <InboxIcon />, badge: "2", badgeColor: "danger" },
        { label: "Users", href: "#", icon: <UsersIcon /> },
      ],
    },
    {
      separator: true,
      title: "Hỗ trợ & Thông tin",
      items: [
        { label: "Documentation", href: "#", icon: <DocsIcon /> },
        { label: "Support", href: "#", icon: <SupportIcon /> },
        { label: "PRO version", href: "#", icon: <KanbanIcon />, badge: "v2.0", badgeColor: "brand" },
      ],
    },
  ];

  // Brand SVG
  const LogoSvg = (
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-black text-sm shadow-md">
      R
    </div>
  );

  return (
    <TestPageLayout
      title="Sidebar Component (Flowbite Specification)"
      description="Thành phần thanh điều hướng bên (Sidebar) hiện đại, hỗ trợ menu phân cấp đa tầng (multi-level accordion), phân tách nhóm mục, thẻ quảng cáo/thông báo CTA ở chân trang, logo thương hiệu, chế độ thu gọn (compact) và Drawer Off-Canvas trên thiết bị di động."
    >
      <div className="space-y-10">
        {/* 1. Default Sidebar */}
        <Card
          title="1. Default Sidebar (Thanh điều hướng mặc định)"
          description="Hiển thị danh sách các mục điều hướng với icon, nhãn, trạng thái kích hoạt (active) và nhãn phụ (badges)."
        >
          <div className="flex justify-center bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            <div className="h-[480px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <Sidebar items={defaultItems} brand="Ryokan Flowbite" />
            </div>
          </div>
        </Card>

        {/* 2. Multi-level Menu */}
        <Card
          title="2. Multi-level Menu (Menu phân cấp đa tầng dạng Accordion)"
          description="Cho phép nhóm các mục con bên dưới mục cha (như E-commerce -> Products, Billing, Invoice) với hiệu ứng mũi tên xoay mượt mà."
        >
          <div className="flex justify-center bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            <div className="h-[520px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <Sidebar items={multiLevelItems} brand="Ryokan Store" />
            </div>
          </div>
        </Card>

        {/* 3. Content Separator */}
        <Card
          title="3. Content Separator (Phân tách nội dung & Nhóm mục)"
          description="Sử dụng prop `groups` kèm `separator: true` và `title` để nhóm logic các liên kết quản trị và hỗ trợ người dùng."
        >
          <div className="flex justify-center bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            <div className="h-[580px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <Sidebar groups={groupData} brand="Ryokan Admin" />
            </div>
          </div>
        </Card>

        {/* 4. CTA Button / Promo Box */}
        <Card
          title="4. CTA Box (Thẻ kêu gọi hành động & thông báo ở đáy Sidebar)"
          description="Khung thông tin nổi bật với nút tắt (dismiss), biểu tượng thông báo và nút chuyển hướng/hành động chính."
        >
          <div className="flex justify-center bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            <div className="h-[620px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <Sidebar
                items={defaultItems}
                brand="Ryokan Cloud"
                cta={{
                  title: "Phiên bản Beta",
                  description: "Trải nghiệm giao diện Ryokan v2 mới nhất! Bạn có thể chuyển đổi trong cài đặt hồ sơ.",
                  buttonText: "Nâng cấp gói ngay",
                  onButtonClick: () => alert("Chuyển tới trang đăng ký Pro!"),
                }}
              />
            </div>
          </div>
        </Card>

        {/* 5. Logo Branding */}
        <Card
          title="5. Logo Branding (Thương hiệu & Logo ở đầu Sidebar)"
          description="Tùy biến logo đồ họa dạng ảnh hoặc SVG kết hợp tiêu đề thương hiệu."
        >
          <div className="flex justify-center bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            <div className="h-[480px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <Sidebar
                items={defaultItems}
                brandLogo={LogoSvg}
                brandName="Ryokan Suite"
                brandHref="#home"
              />
            </div>
          </div>
        </Card>

        {/* 6. Compact Mode & Dark Mode */}
        <Card
          title="6. Biến thể Compact & Dark Theme"
          description="Chế độ thu gọn thanh mảnh (w-20) chỉ hiển thị icon giúp tối ưu diện tích hiển thị nội dung chính, hoặc giao diện tối sang trọng."
        >
          <div className="flex flex-wrap items-start justify-center gap-8 bg-slate-50 p-6 rounded-2xl dark:bg-slate-950/50">
            {/* Compact */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">Compact Mode</span>
              <div className="h-[480px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
                <Sidebar
                  items={defaultItems}
                  variant="compact"
                  brandLogo={LogoSvg}
                />
              </div>
            </div>

            {/* Dark */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">Dark Theme</span>
              <div className="h-[480px] overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
                <Sidebar
                  items={defaultItems}
                  variant="dark"
                  brand="Ryokan Dark"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 7. Off-canvas Drawer */}
        <Card
          title="7. Off-canvas Drawer (Ngăn kéo trượt ra vào cho Mobile & Tablet)"
          description="Nhấn nút để kích hoạt ngăn kéo trượt ra từ cạnh trái kèm lớp phủ mờ (backdrop). Người dùng có thể nhấn nền ngoài hoặc nút X để đóng."
        >
          <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl dark:bg-slate-950/50 space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Kiểm tra tính năng Drawer Off-Canvas trên thiết bị di động:
            </p>
            <Button
              variant="primary"
              onClick={() => setDrawerOpen(true)}
              className="gap-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Mở Off-Canvas Sidebar
            </Button>
          </div>

          <Sidebar
            offCanvas
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            groups={groupData}
            brandLogo={LogoSvg}
            brandName="Ryokan Mobile"
            cta={{
              title: "Ưu đãi Mobile",
              description: "Tải ngay ứng dụng Ryokan trên iOS / Android để nhận thông báo tức thì.",
              buttonText: "Tải ứng dụng",
              onButtonClick: () => alert("Mở App Store!"),
            }}
          />
        </Card>
      </div>
    </TestPageLayout>
  );
}
