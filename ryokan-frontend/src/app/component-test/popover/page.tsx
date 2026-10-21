"use client";

import { useState } from "react";
import {
  Card,
  Popover,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  const [password, setPassword] = useState("Ryokan2026$");

  return (
    <TestPageLayout
      title="Popover (Flowbite + Ryokan Style)"
      description="Hộp thông tin ngữ cảnh đa năng: Hỗ trợ 12 vị trí Placement, Kích hoạt Hover / Click, Mũi tên định vị (Arrow), Hồ sơ User, Hồ sơ Doanh nghiệp, Xem trước ảnh (Image preview), Đo độ mạnh mật khẩu và Tiến trình."
    >
      <div className="space-y-10">
        {/* 1. Default Popover */}
        <Card
          title="1. Popover mặc định (Default Popover)"
          description="Bao gồm tiêu đề Header viền xám nhẹ, thân nội dung mô tả chi tiết và mũi tên chỉ hướng."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Popover
              title="Thông tin phòng Deluxe"
              trigger={
                <button
                  type="button"
                  className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-700"
                >
                  Mở Default Popover
                </button>
              }
            >
              <p>
                Phòng Deluxe diện tích 48m² có ban công riêng nhìn ra thung lũng, trang bị bồn tắm ngâm thảo mộc và trà bánh chào đón miễn phí.
              </p>
            </Popover>
          </div>
        </Card>

        {/* 2. User Profile Popover */}
        <Card
          title="2. Thẻ hồ sơ người dùng (User Profile Popover)"
          description="Hiển thị avatar, tên, tài khoản, tiểu sử ngắn và số lượng người theo dõi (Hover hoặc Click)."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Popover
              triggerType="hover"
              placement="bottom-start"
              width="w-72"
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Rê chuột xem hồ sơ khách VIP
                </button>
              }
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-sm font-bold text-white shadow-xs">
                    TD
                  </div>
                  <button
                    type="button"
                    className="rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-700"
                  >
                    Theo dõi
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Tân Đào Duy
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    @tandaoduy · Khách hàng Kim Cương
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Yêu thích du lịch nghỉ dưỡng truyền thống Nhật Bản, khám phá ẩm thực Kaiseki và tắm khoáng Onsen mùa đông.
                </p>
                <div className="flex gap-4 border-t border-slate-100 pt-2 text-xs dark:border-slate-700">
                  <span>
                    <strong className="text-slate-900 dark:text-white">12</strong> Chuyến đi
                  </span>
                  <span>
                    <strong className="text-slate-900 dark:text-white">480</strong> Điểm thưởng
                  </span>
                </div>
              </div>
            </Popover>
          </div>
        </Card>

        {/* 3. Company Profile Popover */}
        <Card
          title="3. Thẻ hồ sơ doanh nghiệp (Company Profile Popover)"
          description="Mô tả thông tin thương hiệu, đường dẫn website, số lượng người yêu thích và các nút tương tác."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Popover
              placement="bottom-start"
              width="w-80"
              trigger={
                <button
                  type="button"
                  className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 dark:border dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors"
                >
                  Hồ sơ Ryokan Yadori
                </button>
              }
            >
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-sm">
                    ♨️
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Ryokan Yadori Japan
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Khu nghỉ dưỡng & Suối khoáng nóng
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Hệ thống lữ quán suối khoáng nóng truyền thống tiêu chuẩn 5 sao với lịch sử hơn 120 năm tại Hakone và Kyoto.
                </p>
                <div className="space-y-1.5 text-xs">
                  <a
                    href="https://ryokan.jp"
                    className="flex items-center gap-1.5 font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    <span>🔗</span> https://ryokan.jp
                  </a>
                  <p className="text-slate-500 dark:text-slate-400">
                    ❤️ Hơn <strong>125.000</strong> khách hàng hài lòng trên toàn cầu
                  </p>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    className="flex-1 rounded-xl bg-indigo-50 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300"
                  >
                    👍 Thích trang
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
                  >
                    Chia sẻ
                  </button>
                </div>
              </div>
            </Popover>
          </div>
        </Card>

        {/* 4. Image Preview Popover */}
        <Card
          title="4. Popover xem trước bài viết & hình ảnh (Image Popover)"
          description="Lấy cảm hứng từ Wikipedia: Khi rê chuột vào từ khóa nổi bật trong đoạn văn, mở xem trước bài viết kèm ảnh."
        >
          <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Trải nghiệm ngâm mình trong làn nước ấm áp của{" "}
            <Popover
              triggerType="hover"
              placement="top"
              width="w-96"
              trigger={
                <span className="cursor-pointer font-bold text-indigo-600 underline decoration-indigo-400 underline-offset-4 hover:text-indigo-700 dark:text-indigo-400">
                  Suối khoáng nóng Hakone Onsen
                </span>
              }
            >
              <div className="grid grid-cols-5 gap-3.5">
                <div className="col-span-3 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Hakone Onsen
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Nằm dưới chân núi Phú Sĩ với nguồn suối khoáng tự nhiên dồi dào khoáng chất giúp trẻ hóa làn da.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Xem lịch sử hình thành →
                  </a>
                </div>
                <div className="col-span-2 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80"
                    alt="Onsen Hakone"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Popover>{" "}
            là một trong những trải nghiệm chữa lành tuyệt vời nhất trong văn hóa Nhật Bản.
          </div>
        </Card>

        {/* 5. Description Popover */}
        <Card
          title="5. Hộp trợ giúp giải thích dấu hỏi chấm (Description Popover)"
          description="Nút icon chấm hỏi (?) đặt cạnh các trường form hoặc thuật ngữ cần giải thích."
        >
          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <span>Chi phí dịch vụ Omotenashi đã bao gồm thuế VAT</span>
            <Popover
              triggerType="hover"
              placement="top"
              width="w-80"
              trigger={
                <button
                  type="button"
                  className="flex size-5 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200"
                  aria-label="Xem giải thích"
                >
                  ?
                </button>
              }
            >
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Chính sách phí Omotenashi
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Phí phục vụ truyền thống bao gồm toàn bộ trà đạo đón khách, khăn ấm Oshibori, nhân viên Yukata riêng cho phòng và chuẩn bị nệm Futon buổi tối.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Chi tiết điều khoản dịch vụ →
                </a>
              </div>
            </Popover>
          </div>
        </Card>

        {/* 6. Progress Popover */}
        <Card
          title="6. Trạng thái dung lượng & Tiến trình (Progress Popover)"
          description="Mô tả mức độ sử dụng tài nguyên (bộ nhớ, phòng trống) với thanh Progress bar sinh động."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Popover
              triggerType="click"
              placement="bottom-start"
              width="w-72"
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  <span>📊</span> Trạng thái công suất phòng
                </button>
              }
            >
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Công suất mùa cao điểm
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Đã đặt <strong className="text-slate-900 dark:text-white">42</strong> trên tổng số{" "}
                  <strong className="text-slate-900 dark:text-white">50</strong> phòng trong tháng 11.
                </p>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Tỷ lệ lấp đầy</span>
                    <span className="text-rose-600">84%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 w-[84%]" />
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Xem sơ đồ đặt phòng →
                </a>
              </div>
            </Popover>
          </div>
        </Card>

        {/* 7. Password Strength Popover */}
        <Card
          title="7. Đánh giá độ mạnh mật khẩu (Password Strength Popover)"
          description="Popover xuất hiện khi tương tác với ô mật khẩu để hướng dẫn quy tắc bảo mật an toàn."
        >
          <div className="max-w-sm space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Mật khẩu tài khoản quản trị
            </label>
            <Popover
              triggerType="click"
              placement="bottom"
              width="w-80"
              trigger={
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              }
            >
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Độ an toàn mật khẩu
                </h4>
                <div className="grid grid-cols-4 gap-1.5">
                  <div className="h-1.5 rounded-full bg-emerald-500" />
                  <div className="h-1.5 rounded-full bg-emerald-500" />
                  <div className="h-1.5 rounded-full bg-emerald-500" />
                  <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mật khẩu cần thỏa mãn các tiêu chí:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <span>✓</span> Tối thiểu 8 ký tự
                  </li>
                  <li className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <span>✓</span> Chứa chữ in hoa & chữ thường
                  </li>
                  <li className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <span>✓</span> Chứa ký tự đặc biệt (@#$%)
                  </li>
                </ul>
              </div>
            </Popover>
          </div>
        </Card>

        {/* 8. Placements */}
        <Card
          title="8. 4 Vị trí hiển thị chính (Placements: Top, Bottom, Left, Right)"
          description="Định vị chính xác Popover theo 4 hướng xung quanh phần tử kích hoạt."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Popover
              placement="top"
              title="Popover Phía Trên (Top)"
              trigger={
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  Top Popover
                </button>
              }
            >
              <p>Nội dung hiển thị phía trên nút kích hoạt.</p>
            </Popover>

            <Popover
              placement="bottom"
              title="Popover Phía Dưới (Bottom)"
              trigger={
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  Bottom Popover
                </button>
              }
            >
              <p>Nội dung hiển thị phía dưới nút kích hoạt.</p>
            </Popover>

            <Popover
              placement="left"
              title="Popover Bên Trái (Left)"
              trigger={
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  Left Popover
                </button>
              }
            >
              <p>Nội dung hiển thị bên trái nút kích hoạt.</p>
            </Popover>

            <Popover
              placement="right"
              title="Popover Bên Phải (Right)"
              trigger={
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
                >
                  Right Popover
                </button>
              }
            >
              <p>Nội dung hiển thị bên phải nút kích hoạt.</p>
            </Popover>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
