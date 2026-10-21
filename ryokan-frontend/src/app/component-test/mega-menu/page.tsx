"use client";

import {
  Card,
  MegaMenu,
  Navbar,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  // 1. Basic text columns
  const basicColumns = [
    {
      title: "Về Ryokan",
      items: [
        "Lịch sử thành lập",
        "Triết lý Omotenashi",
        "Vườn thiền & Cảnh quan",
        "Giải thưởng đạt được",
      ],
    },
    {
      title: "Tin tức & Sự kiện",
      items: [
        "Lễ hội ngắm hoa Sakura",
        "Thực đơn mùa thu mới",
        "Bản tin trải nghiệm",
        "Chính sách bảo tồn",
      ],
    },
    {
      title: "Liên hệ & Trợ giúp",
      items: [
        "Đường đi & Bản đồ",
        "Dịch vụ đưa đón sân bay",
        "Quy định đặt phòng",
        "Câu hỏi thường gặp (FAQ)",
      ],
    },
  ];

  // 2. Columns with icons and descriptions
  const iconColumns = [
    {
      title: "Hệ thống phòng nghỉ",
      items: [
        {
          title: "Sakura Suite",
          description: "Phòng VIP view đỉnh núi Phú Sĩ",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
          badge: <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-700 dark:bg-rose-900/60 dark:text-rose-300">Hot</span>,
        },
        {
          title: "Momiji Villa",
          description: "Biệt thự sân vườn đá thiền riêng biệt",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
        {
          title: "Matsu Tatami Room",
          description: "Trải nghiệm chiếu cói truyền thống",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Dịch vụ Onsen & Trị liệu",
      items: [
        {
          title: "Rotenburo Ngoài trời",
          description: "Ngâm suối khoáng nóng giữa thiên nhiên",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        },
        {
          title: "Massage Shiatsu",
          description: "Bấm huyệt giải tỏa căng thẳng toàn thân",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          title: "Trà đạo Chado",
          description: "Nghi lễ thưởng trà Matcha Uji nguyên bản",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Ẩm thực Kaiseki",
      items: [
        {
          title: "Set Kaiseki 8 món",
          description: "Đầu bếp Michelin chế biến nguyên liệu mùa vụ",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
        },
        {
          title: "Bò Wagyu A5 nướng đá",
          description: "Đặc sản thịt bò thượng hạng tan chảy",
          icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a7.975 7.975 0 010 11.314z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <TestPageLayout
      title="Mega Menu (Flowbite + Ryokan Style)"
      description="Menu kích thước lớn mở rộng: Hỗ trợ Dạng Dropdown 3 cột, Icon kèm mô tả, Trải rộng toàn trang (Full-width), Khối kêu gọi hành động CTA và Thẻ bài viết kèm hình nền."
    >
      <div className="space-y-10">
        {/* 1. Default Mega Menu */}
        <Card
          title="1. Mega Menu mặc định (Default Mega Menu - 3 Columns)"
          description="Hiển thị danh sách liên kết được chia thành 3 cột cân đối với tiêu đề nhóm rõ ràng."
        >
          <div className="p-4">
            <MegaMenu
              label="Thông tin Ryokan"
              columns={basicColumns}
            />
          </div>
        </Card>

        {/* 2. Mega Menu with Icons & Descriptions */}
        <Card
          title="2. Mega Menu kèm Icon & Mô tả chi tiết (With Icons)"
          description="Mỗi mục liên kết bao gồm icon minh họa, tiêu đề in đậm, huy hiệu nổi bật và dòng mô tả ngắn."
        >
          <div className="p-4">
            <MegaMenu
              label="Hạng mục dịch vụ cao cấp"
              columns={iconColumns}
            />
          </div>
        </Card>

        {/* 3. Full-width Mega Menu */}
        <Card
          title="3. Trải rộng toàn bộ bề ngang (Full-width Dropdown)"
          description="Mega menu trải rộng 100% kích thước bề ngang, thích hợp cho website quy mô lớn."
        >
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
            <MegaMenu
              label="Toàn bộ hệ thống Ryokan"
              variant="full-width"
              columns={iconColumns}
            />
          </div>
        </Card>

        {/* 4. Full-width with CTA */}
        <Card
          title="4. Kèm khối kêu gọi hành động CTA (Full-width with CTA)"
          description="Cột bên phải dành riêng cho khối CTA giới thiệu thương hiệu hoặc chương trình khuyến mãi mùa này."
        >
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
            <MegaMenu
              label="Gói nghỉ dưỡng & Khuyến mãi"
              variant="full-width"
              columns={basicColumns.slice(0, 2)}
              cta={{
                title: "Thẻ hội viên Ryokan Club",
                description:
                  "Tích điểm nâng hạng phòng miễn phí, tặng kèm suất tắm Onsen riêng tư và set trà chiều mỗi kỳ nghỉ.",
                buttonText: "Khám phá đặc quyền",
                buttonHref: "#",
              }}
            />
          </div>
        </Card>

        {/* 5. Full-width with Image Card */}
        <Card
          title="5. Kèm thẻ hình ảnh nổi bật (Full-width with Image)"
          description="Tích hợp thẻ banner hình nền chất lượng cao bên cạnh danh sách liên kết."
        >
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
            <MegaMenu
              label="Khám phá phòng Suite"
              variant="full-width"
              columns={basicColumns.slice(0, 2)}
              cta={{
                title: "Trải nghiệm Onsen mùa tuyết rơi",
                description:
                  "Đặt trước ngay hôm nay để nhận ưu đãi 30% cho kỳ nghỉ đông tại dãy núi tuyết Hakuba.",
                buttonText: "Đặt chỗ ngay",
                buttonHref: "#",
                backgroundImage:
                  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
              }}
            />
          </div>
        </Card>

        {/* 6. Integration inside Navbar */}
        <Card
          title="6. Tích hợp trực tiếp bên trong Navbar"
          description="Sự kết hợp hoàn hảo giữa thanh Navbar và Mega Menu làm việc mượt mà cùng nhau."
        >
          <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
            <Navbar
              brandName="Ryokan Yadori"
              rounded
              items={[
                { label: "Trang chủ", href: "#", active: true },
                {
                  label: "Dịch vụ",
                  dropdown: (
                    <MegaMenu
                      label="Khám phá dịch vụ"
                      columns={iconColumns}
                    />
                  ),
                },
                { label: "Bảng giá", href: "#" },
                { label: "Liên hệ", href: "#" },
              ]}
              action={
                <button
                  type="button"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs transition hover:bg-indigo-700"
                >
                  Đặt phòng
                </button>
              }
            />
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
