"use client";

import {
  Card,
  Dropdown,
  DropdownCheckbox,
  DropdownChevron,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownRadio,
  DropdownSubmenu,
  DropdownToggle,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  return (
    <TestPageLayout
      title="Dropdown Menu (Flowbite + Ryokan Style)"
      description="Menu tương tác đa năng: Hỗ trợ Click/Hover, 12 vị trí Placement, Menu đa cấp (Multi-level), Header thông tin, Checkbox, Radio và Toggle switch."
    >
      <div className="space-y-8">
        {/* 1. Basic & Variants */}
        <Card
          title="1. Các kiểu dáng (Variants) & Nút cơ bản"
          description="Hỗ trợ các phong cách giao diện Default, Minimal, và Glass mờ sang trọng với mũi tên xoay mượt mà."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Dropdown
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-700">
                  Default Dropdown
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownItem>Bảng điều khiển</DropdownItem>
              <DropdownItem>Cài đặt phòng</DropdownItem>
              <DropdownItem>Lịch sử thanh toán</DropdownItem>
              <DropdownDivider />
              <DropdownItem destructive>Hủy đặt phòng</DropdownItem>
            </Dropdown>

            <Dropdown
              variant="minimal"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
                  Minimal Dropdown
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownItem>Sao chép liên kết</DropdownItem>
              <DropdownItem>Xuất PDF hóa đơn</DropdownItem>
              <DropdownItem>Gửi qua Email</DropdownItem>
            </Dropdown>

            <Dropdown
              variant="glass"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900">
                  Glassmorphism
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownItem>Trải nghiệm Onsen</DropdownItem>
              <DropdownItem>Thực đơn Kaiseki</DropdownItem>
              <DropdownItem>Tham quan vườn thiền</DropdownItem>
            </Dropdown>
          </div>
        </Card>

        {/* 2. User Profile / Account Dropdown */}
        <Card
          title="2. Menu tài khoản người dùng (User Profile & Badges)"
          description="Hiển thị avatar, tên, email, huy hiệu PRO và danh sách liên kết với icon."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Dropdown
              placement="bottom-start"
              trigger={({ open }) => (
                <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white p-1 pe-3 shadow-xs transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 cursor-pointer">
                  <div className="size-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                    TD
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Tân Đào Duy
                  </span>
                  <DropdownChevron open={open} className="text-slate-400 dark:text-slate-500" />
                </div>
              )}
            >
              <DropdownHeader
                name="Tân Đào Duy"
                email="tandaoduy@ryokan.jp"
                badge={
                  <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
                    VIP
                  </span>
                }
              />
              <DropdownItem
                icon={
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
              >
                Hồ sơ lưu trú
              </DropdownItem>
              <DropdownItem
                icon={
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                badge={<span className="size-2 rounded-full bg-emerald-500" />}
              >
                Cài đặt dịch vụ
              </DropdownItem>
              <DropdownItem
                icon={
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                }
              >
                Thẻ thành viên Ryokan
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem
                destructive
                icon={
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                }
              >
                Đăng xuất
              </DropdownItem>
            </Dropdown>

            {/* Notification trigger with badge */}
            <Dropdown
              placement="bottom-end"
              trigger={
                <button
                  type="button"
                  className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1.5 right-1.5 size-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
                </button>
              }
            >
              <DropdownHeader>Thông báo phòng</DropdownHeader>
              <DropdownItem description="Phòng Sakura Suite đã sẵn sàng">
                Check-in sớm thành công
              </DropdownItem>
              <DropdownItem description="Bữa tối Kaiseki bắt đầu lúc 18:30">
                Lịch ẩm thực hôm nay
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem active>Xem tất cả thông báo →</DropdownItem>
            </Dropdown>
          </div>
        </Card>

        {/* 3. Hover trigger & Multi-level dropdown */}
        <Card
          title="3. Kích hoạt bằng Hover & Menu con đa cấp (Multi-level)"
          description="Mở menu ngay khi rê chuột (có timeout delay chống giật) và lồng các submenu con sang bên phải."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Dropdown
              triggerType="hover"
              delay={250}
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-600/25 transition hover:bg-violet-700">
                  Rê chuột vào đây (Hover)
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownItem>Khám phá Ryokan</DropdownItem>
              <DropdownSubmenu label="Gói dịch vụ cao cấp">
                <DropdownItem>Onsen ngoài trời (Rotenburo)</DropdownItem>
                <DropdownItem>Thưởng trà đạo (Chado)</DropdownItem>
                <DropdownItem>Massage Shiatsu</DropdownItem>
              </DropdownSubmenu>
              <DropdownSubmenu label="Thực đơn ẩm thực">
                <DropdownItem>Bữa sáng Nhật Bản truyền thống</DropdownItem>
                <DropdownItem>Set Kaiseki 8 món</DropdownItem>
                <DropdownItem>Trà xanh Matcha Uji</DropdownItem>
              </DropdownSubmenu>
              <DropdownDivider />
              <DropdownItem>Liên hệ lễ tân</DropdownItem>
            </Dropdown>
          </div>
        </Card>

        {/* 4. Placements (Top, Bottom, Left, Right) */}
        <Card
          title="4. Vị trí hiển thị (Placements)"
          description="Kiểm soát hướng bung menu: Top, Bottom, Left, Right."
        >
          <div className="flex flex-wrap gap-4 items-center py-6">
            <Dropdown
              placement="top"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  Top
                  <svg className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
                  </svg>
                </button>
              )}
            >
              <DropdownItem>Mục số 1</DropdownItem>
              <DropdownItem>Mục số 2</DropdownItem>
            </Dropdown>

            <Dropdown
              placement="bottom"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  Bottom
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownItem>Mục số 1</DropdownItem>
              <DropdownItem>Mục số 2</DropdownItem>
            </Dropdown>

            <Dropdown
              placement="right"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  Right
                  <svg className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                </button>
              )}
            >
              <DropdownItem>Mục số 1</DropdownItem>
              <DropdownItem>Mục số 2</DropdownItem>
            </Dropdown>

            <Dropdown
              placement="left"
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                  <svg className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
                  </svg>
                  Left
                </button>
              )}
            >
              <DropdownItem>Mục số 1</DropdownItem>
              <DropdownItem>Mục số 2</DropdownItem>
            </Dropdown>
          </div>
        </Card>

        {/* 5. Checkboxes, Radios & Toggles */}
        <Card
          title="5. Tích hợp Form (Checkbox, Radio, Toggle Switch)"
          description="Chọn nhiều tùy chọn, chọn radio hoặc bật tắt tính năng trực tiếp trong dropdown mà không bị đóng menu đột ngột."
        >
          <div className="flex flex-wrap gap-4 items-center">
            {/* Checkbox Menu */}
            <Dropdown
              closeOnClickInside={false}
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900">
                  Lọc tiện ích (Checkboxes)
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownHeader>Chọn tiện ích phòng</DropdownHeader>
              <DropdownCheckbox label="Bồn tắm gỗ Hinoki" defaultChecked description="Bồn tắm gỗ thơm tự nhiên" />
              <DropdownCheckbox label="View nhìn ra vườn Nhật" defaultChecked description="Không gian yên tĩnh tĩnh lặng" />
              <DropdownCheckbox label="Bao gồm bữa sáng Kaiseki" description="Phục vụ tại phòng riêng" />
            </Dropdown>

            {/* Radio Menu */}
            <Dropdown
              closeOnClickInside={false}
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900">
                  Hạng phòng (Radios)
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownHeader>Chọn loại phòng</DropdownHeader>
              <DropdownRadio name="room-tier" value="standard" label="Phòng Tatami tiêu chuẩn" defaultChecked />
              <DropdownRadio name="room-tier" value="deluxe" label="Phòng Deluxe hướng hồ" />
              <DropdownRadio name="room-tier" value="presidential" label="Villa Hoàng gia có suối riêng" />
            </Dropdown>

            {/* Toggle Switches */}
            <Dropdown
              closeOnClickInside={false}
              trigger={({ open }) => (
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900">
                  Tùy chọn hệ thống (Toggles)
                  <DropdownChevron open={open} />
                </button>
              )}
            >
              <DropdownHeader>Cài đặt trải nghiệm</DropdownHeader>
              <DropdownToggle label="Nhận thông báo ưu đãi" defaultChecked description="Nhận thông báo khi có mùa hoa" />
              <DropdownToggle label="Xác thực 2 yếu tố (2FA)" description="Bảo mật tài khoản đặt phòng" />
              <DropdownToggle label="Đèn ngủ tự động" defaultChecked description="Tự điều chỉnh ánh sáng dịu" />
            </Dropdown>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
