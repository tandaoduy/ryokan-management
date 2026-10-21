"use client";

import { useState } from "react";
import {
  Card,
  Rating,
  RatingAdvanced,
  RatingComment,
  RatingReviewCard,
  RatingScore,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  const [interactiveRating, setInteractiveRating] = useState(4);

  return (
    <TestPageLayout
      title="Rating (Flowbite + Ryokan Style)"
      description="Hệ thống đánh giá và xếp hạng điểm số: Hỗ trợ sao tĩnh và tương tác (Interactive), Kích thước sm/md/lg/xl, Đánh giá phân bổ (Advanced rating), Bảng điểm tiêu chí (Score rating), Thẻ bình luận đánh giá (Comment) và Thẻ trải nghiệm khách hàng (Review card)."
    >
      <div className="space-y-10">
        {/* 1. Default Rating & With Text & Count */}
        <Card
          title="1. Đánh giá mặc định (Default Rating & With Text/Count)"
          description="Hiển thị số sao đánh giá vàng nổi bật kết hợp dòng văn bản hoặc số lượng đánh giá."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Đánh giá sao mặc định (Default Rating)
              </p>
              <Rating value={4} />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kèm văn bản điểm số (Rating with Text)
              </p>
              <Rating value={4.95} showText />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dạng tóm tắt rút gọn (Rating Count)
              </p>
              <Rating value={4.95} showCount count={73} />
            </div>
          </div>
        </Card>

        {/* 2. Star Sizes */}
        <Card
          title="2. Các kích thước sao (Star Sizes: sm, md, lg, xl)"
          description="Linh hoạt thay đổi kích thước từ nhỏ (16px) đến siêu lớn (28px) phù hợp từng vị trí trên giao diện."
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-20 text-xs font-semibold text-slate-400">Size SM (16px)</span>
              <Rating value={4} size="sm" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-xs font-semibold text-slate-400">Size MD (20px)</span>
              <Rating value={4} size="md" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-xs font-semibold text-slate-400">Size LG (24px)</span>
              <Rating value={4} size="lg" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 text-xs font-semibold text-slate-400">Size XL (28px)</span>
              <Rating value={4} size="xl" />
            </div>
          </div>
        </Card>

        {/* 3. Interactive Rating */}
        <Card
          title="3. Đánh giá tương tác chọn sao (Interactive Rating)"
          description="Người dùng có thể rê chuột xem trước và bấm chọn số sao mong muốn."
        >
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <Rating
                interactive
                value={interactiveRating}
                onChange={setInteractiveRating}
                size="lg"
              />
              <span className="rounded-xl bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                {interactiveRating} / 5 sao
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Hãy rê chuột và nhấp chọn số sao bạn muốn chấm cho dịch vụ phòng của Ryokan!
            </p>
          </div>
        </Card>

        {/* 4. Advanced Rating */}
        <Card
          title="4. Đánh giá phân bổ nâng cao (Advanced Rating Breakdown)"
          description="Hiển thị tỷ lệ phần trăm phân bổ số lượng người đánh giá theo từng thang điểm 1 đến 5 sao."
        >
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <RatingAdvanced
              rating={4.95}
              totalRatings={1745}
              distribution={[
                { stars: 5, percentage: 70 },
                { stars: 4, percentage: 17 },
                { stars: 3, percentage: 8 },
                { stars: 2, percentage: 4 },
                { stars: 1, percentage: 1 },
              ]}
            />
          </div>
        </Card>

        {/* 5. Score Rating */}
        <Card
          title="5. Điểm số chi tiết theo tiêu chí (Score Rating)"
          description="Đánh giá chất lượng khu nghỉ dưỡng theo từng hạng mục: Nhân viên, Tiện nghi, Độ sạch sẽ, Vị trí..."
        >
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <RatingScore
              score={8.7}
              label="Xuất sắc"
              totalReviews={376}
              categories={[
                { label: "Nhân viên phục vụ (Staff)", score: 8.8 },
                { label: "Độ thoải mái (Comfort)", score: 8.9 },
                { label: "Wifi & Internet miễn phí", score: 8.8 },
                { label: "Tiện nghi nghỉ dưỡng (Facilities)", score: 5.4 },
                { label: "Đáng giá tiền (Value for money)", score: 8.9 },
                { label: "Độ sạch sẽ (Cleanliness)", score: 7.0 },
                { label: "Vị trí địa lý (Location)", score: 8.9 },
              ]}
            />
          </div>
        </Card>

        {/* 6. Rating Comment */}
        <Card
          title="6. Bình luận đánh giá đơn lẻ (Rating Comment)"
          description="Hiển thị avatar tác giả, ngày đánh giá, số sao, tiêu đề cảm nghĩ và nút 'Hữu ích'."
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <RatingComment
              author={{
                name: "Nguyễn Nhật Nam",
                avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                date: "16 Tháng 10, 2026",
                joinedDate: "Tháng 8, 2023",
              }}
              rating={5}
              title="Kỳ nghỉ tuyệt vời nhất tại suối khoáng nóng Hakone!"
              helpfulCount={24}
              content={
                <p>
                  Đây là lần thứ ba tôi cùng gia đình ghé thăm Ryokan Yadori. Cảnh quan vườn thiền mùa thu lá đỏ tuyệt đẹp, bể tắm Onsen ngoài trời nhìn thẳng ra thung lũng rất thư thái. Đồ ăn Kaiseki tươi ngon chuẩn vị Nhật Bản. Chắc chắn sẽ quay lại vào mùa đông!
                </p>
              }
            />
          </div>
        </Card>

        {/* 7. Review Content Card */}
        <Card
          title="7. Thẻ đánh giá chi tiết 3 cột (Review Content Card)"
          description="Bố cục 3 cột chuyên nghiệp gồm thông tin khách hàng, chi tiết chuyến đi, điểm số tổng quan và nội dung nhận xét."
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <RatingReviewCard
              author={{
                name: "Sarah Jenkins",
                country: "Hoa Kỳ",
                countryFlag: "🇺🇸",
                avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
              }}
              details={[
                {
                  icon: <span>🏡</span>,
                  text: "Villa Momiji (View hồ cá Koi)",
                },
                {
                  icon: <span>🗓️</span>,
                  text: "Lưu trú 3 đêm · Tháng 10/2026",
                },
                {
                  icon: <span>👨‍👩‍👧</span>,
                  text: "Kỳ nghỉ gia đình",
                },
              ]}
              review={{
                date: "20 Tháng 10, 2026",
                title: "Dịch vụ Omotenashi vượt xa mong đợi, sạch sẽ hoàn hảo!",
                score: 9.8,
                content: (
                  <div className="space-y-3">
                    <p>
                      Phòng nghỉ sạch sẽ tinh tươm, bồn tắm gỗ Hinoki tỏa hương thơm tự nhiên dễ chịu. Nhân viên phục vụ chu đáo đến từng chi tiết nhỏ nhất như chuẩn bị sẵn dép Geta và áo Yukata vừa vặn cho các con tôi.
                    </p>
                    <p>
                      Bữa tối 8 món Kaiseki được phục vụ tận phòng là một tác phẩm nghệ thuật ẩm thực. Chúng tôi thực sự cảm nhận được tinh thần hiếu khách Omotenashi đích thực của văn hóa lữ quán truyền thống.
                    </p>
                  </div>
                ),
              }}
              helpfulCount={38}
            />
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
