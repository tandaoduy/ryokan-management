"use client";

import { useState } from "react";
import {
  Card,
  Dropdown,
  DropdownChevron,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownSubmenu,
  Navbar,
  NavbarLink,
  NavbarSubmenu,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  const [selectedLang, setSelectedLang] = useState("Tiếng Việt");

  // Sample standard nav items
  const standardItems = [
    { label: "Trang chủ", href: "#", active: true },
    { label: "Về Ryokan", href: "#" },
    { label: "Dịch vụ phòng", href: "#" },
    { label: "Bảng giá", href: "#" },
    { label: "Liên hệ", href: "#" },
  ];

  return (
    <TestPageLayout
      title="Navbar (Flowbite + Ryokan Style)"
      description="Thanh điều hướng đỉnh cao theo chuẩn Flowbite: Hỗ trợ Responsive Mobile Hamburger, Dropdown đơn và đa cấp, Ô tìm kiếm, Menu tài khoản người dùng, Bộ chọn ngôn ngữ, Menu cấp 2 (Submenu), Sticky và các bề mặt Glass / Dark / Solid."
    >
      <div className="space-y-10">
        {/* 1. Default Navbar */}
        <Card
          title="1. Thanh điều hướng mặc định (Default Navbar)"
          description="Thiết kế chuẩn gồm Logo, danh sách trang, trạng thái đang chọn (Active) và nút hamburger tự động xuất hiện trên màn hình mobile."
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <Navbar
              brandName="Flowbite Ryokan"
              items={standardItems}
              rounded
            />
          </div>
        </Card>

        {/* 2. Navbar with Dropdown */}
        <Card
          title="2. Thanh điều hướng kèm Dropdown Menu (Navbar with Dropdown)"
          description="Nhúng menu thả xuống vào một mục điều hướng để mở rộng các liên kết con."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Cloud"
              rounded
              items={[
                { label: "Trang chủ", href: "#", active: true },
                {
                  label: "Dịch vụ",
                  dropdown: (
                    <Dropdown
                      placement="bottom-start"
                      trigger={({ open }) => (
                        <button
                          type="button"
                          className="flex items-center gap-1.5 py-2 px-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 md:p-0 dark:text-slate-300 dark:hover:text-indigo-400"
                        >
                          Dịch vụ
                          <DropdownChevron open={open} />
                        </button>
                      )}
                    >
                      <DropdownItem>Bể tắm Onsen ngoài trời</DropdownItem>
                      <DropdownItem>Ẩm thực Kaiseki 8 món</DropdownItem>
                      <DropdownItem>Trà đạo & Thiền định</DropdownItem>
                      <DropdownDivider />
                      <DropdownItem>Massage trị liệu Shiatsu</DropdownItem>
                    </Dropdown>
                  ),
                },
                { label: "Phòng nghỉ", href: "#" },
                { label: "Bảng giá", href: "#" },
                { label: "Hỗ trợ", href: "#" },
              ]}
            />
          </div>
        </Card>

        {/* 3. Multi-level Dropdown */}
        <Card
          title="3. Menu đa cấp lồng nhau (Multi-level Dropdown)"
          description="Hỗ trợ các cấp submenu con bay sang bên phải khi rê chuột hoặc bấm chọn."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Resort"
              rounded
              items={[
                { label: "Trang chủ", href: "#", active: true },
                {
                  label: "Khám phá",
                  dropdown: (
                    <Dropdown
                      placement="bottom-start"
                      trigger={({ open }) => (
                        <button
                          type="button"
                          className="flex items-center gap-1.5 py-2 px-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 md:p-0 dark:text-slate-300 dark:hover:text-indigo-400"
                        >
                          Khám phá
                          <DropdownChevron open={open} />
                        </button>
                      )}
                    >
                      <DropdownItem>Tổng quan khuôn viên</DropdownItem>
                      <DropdownSubmenu label="Khu biệt thự VIP">
                        <DropdownItem>Villa Sakura (View núi Phú Sĩ)</DropdownItem>
                        <DropdownItem>Villa Momiji (View hồ cá Koi)</DropdownItem>
                        <DropdownItem>Villa Matsu (Vườn thiền riêng)</DropdownItem>
                      </DropdownSubmenu>
                      <DropdownSubmenu label="Gói trải nghiệm đặc biệt">
                        <DropdownItem>Ngắm hoa anh đào mùa xuân</DropdownItem>
                        <DropdownItem>Tắm suối nước nóng mùa đông</DropdownItem>
                      </DropdownSubmenu>
                      <DropdownDivider />
                      <DropdownItem>Liên hệ lễ tân 24/7</DropdownItem>
                    </Dropdown>
                  ),
                },
                { label: "Ưu đãi", href: "#" },
                { label: "Đánh giá", href: "#" },
              ]}
            />
          </div>
        </Card>

        {/* 4. Navbar with CTA Button */}
        <Card
          title="4. Kèm nút kêu gọi hành động (Navbar with CTA button)"
          description="Nút CTA nổi bật đặt ở góc phải, giữ nguyên vị trí ưu tiên trên cả desktop và mobile."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Booking"
              items={standardItems}
              rounded
              action={
                <button
                  type="button"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                  Đặt phòng ngay
                </button>
              }
            />
          </div>
        </Card>

        {/* 5. Navbar with Search */}
        <Card
          title="5. Kèm ô tìm kiếm (Navbar with Search)"
          description="Tích hợp sẵn ô tìm kiếm tiện lợi với icon kính lúp, tối ưu co giãn trên desktop và mobile."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Search"
              items={standardItems.slice(0, 3)}
              search
              rounded
              onSearch={(q) => alert(`Tìm kiếm: ${q}`)}
            />
          </div>
        </Card>

        {/* 6. Language Dropdown */}
        <Card
          title="6. Bộ chọn ngôn ngữ (Language Dropdown)"
          description="Menu chọn ngôn ngữ quốc tế kèm biểu tượng cờ và tên quốc gia."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Global"
              items={standardItems.slice(0, 4)}
              rounded
              userMenu={
                <Dropdown
                  placement="bottom-end"
                  trigger={({ open }) => (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <span className="text-base">🌐</span>
                      <span>{selectedLang}</span>
                      <DropdownChevron open={open} className="size-3.5 text-slate-400" />
                    </button>
                  )}
                >
                  <DropdownItem onClick={() => setSelectedLang("Tiếng Việt")}>
                    🇻🇳 Tiếng Việt
                  </DropdownItem>
                  <DropdownItem onClick={() => setSelectedLang("English (US)")}>
                    🇺🇸 English (US)
                  </DropdownItem>
                  <DropdownItem onClick={() => setSelectedLang("日本語 (JP)")}>
                    🇯🇵 日本語 (Japanese)
                  </DropdownItem>
                  <DropdownItem onClick={() => setSelectedLang("Deutsch (DE)")}>
                    🇩🇪 Deutsch
                  </DropdownItem>
                </Dropdown>
              }
            />
          </div>
        </Card>

        {/* 7. User Menu Dropdown */}
        <Card
          title="7. Menu tài khoản người dùng (User Menu Dropdown)"
          description="Hiển thị avatar tròn, thông tin cá nhân và các tác vụ tài khoản."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Portal"
              items={standardItems.slice(0, 4)}
              rounded
              userMenu={
                <Dropdown
                  placement="bottom-end"
                  trigger={
                    <button
                      type="button"
                      className="flex size-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 font-bold text-white shadow-xs ring-2 ring-white hover:opacity-90 dark:ring-slate-800 text-xs"
                      aria-label="Menu người dùng"
                    >
                      TD
                    </button>
                  }
                >
                  <DropdownHeader
                    name="Tân Đào Duy"
                    email="tandaoduy@ryokan.jp"
                    badge={
                      <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
                        Admin
                      </span>
                    }
                  />
                  <DropdownItem>Bảng điều khiển quản lý</DropdownItem>
                  <DropdownItem>Cài đặt phòng & Giá</DropdownItem>
                  <DropdownItem>Lịch sử hóa đơn</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem destructive>Đăng xuất</DropdownItem>
                </Dropdown>
              }
            />
          </div>
        </Card>

        {/* 8. Navbar with Submenu */}
        <Card
          title="8. Menu 2 tầng (Navbar with Submenu)"
          description="Thiết kế 2 tầng: Tầng trên gồm Hotline, Logo và Đăng nhập; Tầng dưới là thanh Submenu danh mục."
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <Navbar
              brandName="Ryokan Luxury"
              bordered={false}
              items={[]}
              action={
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <a href="tel:19001234" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400">
                    Hotline: 1900 1234
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                    Đăng nhập →
                  </a>
                </div>
              }
            />
            <NavbarSubmenu>
              <NavbarLink href="#" active>
                Tất cả phòng
              </NavbarLink>
              <NavbarLink href="#">Phòng gia đình</NavbarLink>
              <NavbarLink href="#">Suite cao cấp</NavbarLink>
              <NavbarLink href="#">Suối khoáng nóng riêng</NavbarLink>
              <NavbarLink href="#">ẩm thực truyền thống</NavbarLink>
              <NavbarLink href="#">Tour trải nghiệm</NavbarLink>
            </NavbarSubmenu>
          </div>
        </Card>

        {/* 9. Glassmorphism & Dark Surfaces */}
        <Card
          title="9. Các bề mặt: Glassmorphism, Solid & Dark Mode"
          description="Tùy biến phong cách kính mờ cao cấp, nền đồng nhất (Solid) hoặc giao diện tối sang trọng."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Glassmorphism (Kính mờ xuyên thấu)
              </p>
              <div className="rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-4 border border-indigo-100 dark:border-indigo-950">
                <Navbar
                  variant="glass"
                  brandName="Ryokan Glass"
                  items={standardItems.slice(0, 4)}
                  rounded
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Solid (Nền khối đồng nhất)
              </p>
              <Navbar
                variant="solid"
                brandName="Ryokan Solid"
                items={standardItems.slice(0, 4)}
                rounded
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dark Mode (Nền đen huyền bí)
              </p>
              <Navbar
                variant="dark"
                brandName="Ryokan Midnight"
                items={standardItems.slice(0, 4)}
                rounded
                action={
                  <button className="rounded-xl bg-indigo-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-600">
                    Khám phá
                  </button>
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
