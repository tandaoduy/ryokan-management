"use client";

import { useState } from "react";
import { Button, Card, Tabs } from "../../../components";
import type { TabItem, TabsColor } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

// SVG Icons matching Flowbite
const ProfileIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeWidth={2} d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2" />
  </svg>
);

const ContactsIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
  </svg>
);

export default function Page() {
  const [controlledTab, setControlledTab] = useState("dashboard");
  const [selectedColor, setSelectedColor] = useState<TabsColor>("purple");

  // Standard tab items
  const standardTabs: TabItem[] = [
    {
      id: "profile",
      label: "Profile",
      icon: <ProfileIcon />,
      content: (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Nội dung tab <strong className="font-semibold text-slate-900 dark:text-white">Profile</strong>: Quản lý thông tin cá nhân, ảnh đại diện và địa chỉ email đã xác thực của người dùng trong hệ sinh thái Ryokan.
        </div>
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
      badge: "Mới",
      badgeColor: "brand",
      content: (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Nội dung tab <strong className="font-semibold text-slate-900 dark:text-white">Dashboard</strong>: Báo cáo phân tích doanh thu đặt phòng, lượt check-in hôm nay và mức độ hài lòng của khách lưu trú.
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
      content: (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Nội dung tab <strong className="font-semibold text-slate-900 dark:text-white">Settings</strong>: Cấu hình chính sách hủy phòng, ngôn ngữ hiển thị mặc định và khóa bảo mật 2 lớp (2FA).
        </div>
      ),
    },
    {
      id: "contacts",
      label: "Contacts",
      icon: <ContactsIcon />,
      badge: "4",
      badgeColor: "danger",
      content: (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Nội dung tab <strong className="font-semibold text-slate-900 dark:text-white">Contacts</strong>: Danh bạ 4 đối tác lữ hành và hướng dẫn viên địa phương đã kết nối với Ryokan.
        </div>
      ),
    },
    {
      id: "disabled",
      label: "Disabled",
      disabled: true,
      content: <p>Nội dung này không thể truy cập.</p>,
    },
  ];

  return (
    <TestPageLayout
      title="Tabs Component (Flowbite Specification)"
      description="Thành phần điều hướng phân cấp phụ và chuyển đổi nội dung linh hoạt theo tiêu chuẩn Flowbite: Hỗ trợ Underline, Default bo góc, Pills, Boxed, Full-width, Vertical và bảng màu tùy biến phong phú."
    >
      <div className="space-y-10">
        {/* 1. Default Tabs */}
        <Card
          title="1. Default Tabs (Nền bo cong ở mục đang chọn)"
          description="Kiểu tab mặc định của Flowbite với nền xám nhạt và chữ nổi bật khi được kích hoạt."
        >
          <Tabs tabs={standardTabs} variant="default" defaultTabId="profile" />
        </Card>

        {/* 2. Tabs with Underline */}
        <Card
          title="2. Tabs with Underline (Đường gạch chân Active)"
          description="Kiểu tab thanh lịch với đường gạch chân thương hiệu ở tab active và hiệu ứng di chuột mượt mà."
        >
          <Tabs tabs={standardTabs} variant="underline" color="brand" defaultTabId="dashboard" />
        </Card>

        {/* 3. Pills Tabs */}
        <Card
          title="3. Pills Tabs (Dạng nút bấm bo tròn viên thuốc)"
          description="Sử dụng các nút bo góc độc lập, thích hợp làm bộ lọc danh mục hoặc phân loại thẻ."
        >
          <Tabs tabs={standardTabs} variant="pills" color="brand" defaultTabId="dashboard" />
        </Card>

        {/* 4. Boxed Tabs */}
        <Card
          title="4. Boxed Segmented Tabs (Khung nền đóng hộp)"
          description="Các tab được bao bọc trong một khay nền bo góc với hiệu ứng đổ bóng cho tab được chọn."
        >
          <Tabs tabs={standardTabs} variant="boxed" defaultTabId="settings" />
        </Card>

        {/* 5. Full-width Tabs */}
        <Card
          title="5. Full-width Tabs (Toàn bộ chiều rộng container)"
          description="Các tab tự động co giãn chia đều 100% chiều ngang khung chứa, kèm dropdown lựa chọn tiện lợi trên màn hình di động."
        >
          <Tabs tabs={standardTabs} variant="full-width" defaultTabId="profile" />
        </Card>

        {/* 6. Vertical Tabs */}
        <Card
          title="6. Vertical Tabs (Sắp xếp cột dọc bên trái)"
          description="Cột điều hướng bên trái và khung nội dung mở rộng bên phải, lý tưởng cho trang Cài đặt (Settings) hoặc Trang hồ sơ người dùng."
        >
          <Tabs tabs={standardTabs} orientation="vertical" defaultTabId="profile" />
        </Card>

        {/* 7. Active Tab Style Colors */}
        <Card
          title="7. Tùy biến màu sắc (Active Color Styles)"
          description="Dễ dàng đổi tông màu tab active giữa Brand (Indigo), Purple, Emerald, Amber, Rose hoặc Dark."
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 me-2">
                Chọn bảng màu:
              </span>
              {(["brand", "purple", "emerald", "amber", "rose", "dark"] as TabsColor[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize border transition-all ${
                    selectedColor === c
                      ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <Tabs tabs={standardTabs} variant="underline" color={selectedColor} defaultTabId="dashboard" />
            </div>
          </div>
        </Card>

        {/* 8. Interactive Controlled Tabs */}
        <Card
          title="8. Điều khiển tương tác bằng JavaScript (Controlled Mode)"
          description="Sử dụng prop `activeTabId` và `onTabChange` để điều hướng tab từ các nút bấm bên ngoài."
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={controlledTab === "profile" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setControlledTab("profile")}
              >
                Mở Profile
              </Button>
              <Button
                variant={controlledTab === "dashboard" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setControlledTab("dashboard")}
              >
                Mở Dashboard
              </Button>
              <Button
                variant={controlledTab === "settings" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setControlledTab("settings")}
              >
                Mở Settings
              </Button>
              <Button
                variant={controlledTab === "contacts" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setControlledTab("contacts")}
              >
                Mở Contacts
              </Button>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <Tabs
                tabs={standardTabs}
                variant="underline"
                activeTabId={controlledTab}
                onTabChange={(id) => setControlledTab(id)}
              />
            </div>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
