"use client";

import { useState } from "react";
import {
  Card,
  Pagination,
  PaginationNavigation,
  PaginationSelectJumper,
  PaginationSingle,
  PaginationTableInfo,
} from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function Page() {
  // Interactive states for different sections
  const [page1, setPage1] = useState(3);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(2);
  const [pageTable, setPageTable] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageDropdown, setPageDropdown] = useState(3);
  const [pageInput, setPageInput] = useState(5);
  const [pageSelectJumper, setPageSelectJumper] = useState(3);
  const [pageSingle, setPageSingle] = useState(1);
  const [pageLong, setPageLong] = useState(6);

  return (
    <TestPageLayout
      title="Pagination (Flowbite + Ryokan Style)"
      description="Bộ điều hướng trang hoàn chỉnh: Hỗ trợ Default connected, Icon/Text, Kích thước sm/md/lg, Bảng dữ liệu (Table), Dropdown chọn số dòng, Ô nhập nhảy trang (Jumper) và Thu gọn Single."
    >
      <div className="space-y-8">
        {/* 1. Default Pagination & Sizes */}
        <Card
          title="1. Phân trang mặc định (Default Pagination) & Kích thước"
          description="Kiểu nối liền (-space-x-px) với 2 kích thước chuẩn Flowbite: Vừa (md - 36px) và Lớn (lg - 40px)."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kích thước vừa (md - 36px) kèm chữ Previous / Next
              </p>
              <Pagination
                totalPages={5}
                currentPage={page1}
                onPageChange={setPage1}
                showText
                showIcons={false}
                size="md"
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kích thước lớn (lg - 40px) kèm chữ Previous / Next
              </p>
              <Pagination
                totalPages={5}
                currentPage={page1}
                onPageChange={setPage1}
                showText
                showIcons={false}
                size="lg"
              />
            </div>
          </div>
        </Card>

        {/* 2. Pagination with Icons */}
        <Card
          title="2. Phân trang sử dụng Icons (Pagination with Icons)"
          description="Sử dụng SVG icons thay thế hoặc kết hợp với chữ để điều hướng trang gọn gàng hơn."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Chỉ sử dụng Icons (Size md)
              </p>
              <Pagination
                totalPages={5}
                currentPage={page2}
                onPageChange={setPage2}
                showIcons
                showText={false}
                size="md"
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Chỉ sử dụng Icons (Size lg)
              </p>
              <Pagination
                totalPages={5}
                currentPage={page2}
                onPageChange={setPage2}
                showIcons
                showText={false}
                size="lg"
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kết hợp cả Icons và Chữ
              </p>
              <Pagination
                totalPages={5}
                currentPage={page2}
                onPageChange={setPage2}
                showIcons
                showText
                previousLabel="Trang trước"
                nextLabel="Trang sau"
                size="md"
              />
            </div>
          </div>
        </Card>

        {/* 3. Previous and Next Only */}
        <Card
          title="3. Nút Trước và Sau độc lập (Previous and Next)"
          description="Dành cho các trang dạng bài viết blog, gallery ảnh hoặc luồng chuyển bước đơn giản."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dạng nút tách rời (Separated Buttons) - Size md & lg
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <PaginationNavigation
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="md"
                  showIcons={false}
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
                <PaginationNavigation
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="lg"
                  showIcons={false}
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kèm Icons mũi tên (With Icons)
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <PaginationNavigation
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="md"
                  showIcons
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
                <PaginationNavigation
                  currentPage={page3}
                  totalPages={10}
                  onPageChange={setPage3}
                  size="lg"
                  showIcons
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Nút nối liền (Grouped)
              </p>
              <PaginationNavigation
                currentPage={page3}
                totalPages={10}
                onPageChange={setPage3}
                variant="grouped"
                size="md"
                showIcons
                showText
                previousLabel="Previous"
                nextLabel="Next"
              />
            </div>
          </div>
        </Card>

        {/* 4. Table Data Pagination */}
        <Card
          title="4. Phân trang dữ liệu bảng (Table Data Pagination)"
          description="Hiển thị thông tin dòng dữ liệu 'Showing 1 to 10 of 100 Entries' kết hợp với nút điều hướng."
        >
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex flex-col items-center gap-3">
                <PaginationTableInfo
                  currentPage={pageTable}
                  totalItems={100}
                  itemsPerPage={10}
                />
                <PaginationNavigation
                  currentPage={pageTable}
                  totalPages={10}
                  onPageChange={setPageTable}
                  variant="grouped"
                  size="md"
                  showIcons={false}
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex flex-col items-center gap-3">
                <PaginationTableInfo
                  currentPage={pageTable}
                  totalItems={100}
                  itemsPerPage={10}
                />
                <PaginationNavigation
                  currentPage={pageTable}
                  totalPages={10}
                  onPageChange={setPageTable}
                  variant="grouped"
                  size="md"
                  showIcons
                  showText
                  previousLabel="Previous"
                  nextLabel="Next"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tích hợp nguyên khối trong thẻ &lt;Pagination layout=&quot;table&quot; /&gt;
              </p>
              <Pagination
                totalPages={10}
                totalItems={100}
                itemsPerPage={10}
                currentPage={pageTable}
                onPageChange={setPageTable}
                layout="table"
                showIcons
              />
            </div>
          </div>
        </Card>

        {/* 5. Pagination with Dropdown */}
        <Card
          title="5. Phân trang kèm Dropdown chọn số dòng (Pagination with Dropdown)"
          description="Cho phép người dùng tùy chọn số lượng mục hiển thị mỗi trang (10, 25, 50, 100/trang)."
        >
          <div className="space-y-4">
            <Pagination
              totalPages={Math.ceil(150 / itemsPerPage)}
              currentPage={pageDropdown}
              onPageChange={setPageDropdown}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
              pageSizeOptions={[10, 25, 50, 100]}
              showPageSizeSelector
              showIcons
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Đang chọn: <strong>{itemsPerPage} dòng/trang</strong> | Tổng số trang hiện tại:{" "}
              <strong>{Math.ceil(150 / itemsPerPage)}</strong>
            </p>
          </div>
        </Card>

        {/* 6. Pagination with Input */}
        <Card
          title="6. Nhảy đến trang cụ thể (Pagination with Input & Button)"
          description="Nhập số trang vào ô input và nhấn Enter hoặc nút 'Đi' để chuyển ngay đến trang đó."
        >
          <div className="space-y-4">
            <Pagination
              totalPages={20}
              currentPage={pageInput}
              onPageChange={setPageInput}
              showPageJumper
              showIcons
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Trang hiện tại: <strong>{pageInput} / 20</strong>
            </p>
          </div>
        </Card>

        {/* 7. Select input and buttons */}
        <Card
          title="7. Chọn trang bằng Select dropdown (Select input & buttons)"
          description="Chọn nhanh trang trong thẻ &lt;select&gt; kết hợp văn bản tổng số trang và 2 nút mũi tên."
        >
          <div className="flex flex-wrap items-center gap-6">
            <PaginationSelectJumper
              currentPage={pageSelectJumper}
              totalPages={15}
              onPageChange={setPageSelectJumper}
              size="md"
            />
          </div>
        </Card>

        {/* 8. Single pagination */}
        <Card
          title="8. Phân trang rút gọn một cụm (Single Pagination)"
          description="Thiết kế siêu nhỏ gọn thích hợp trên mobile, modal hoặc thanh công cụ hẹp: < 1 / 99 >."
        >
          <div className="flex flex-wrap items-center gap-6">
            <PaginationSingle
              currentPage={pageSingle}
              totalPages={99}
              onPageChange={setPageSingle}
              size="md"
            />
            <PaginationSingle
              currentPage={pageSingle}
              totalPages={99}
              onPageChange={setPageSingle}
              size="lg"
            />
          </div>
        </Card>

        {/* 9. Smart Ellipsis for Many Pages */}
        <Card
          title="9. Tự động thu gọn dấu ba chấm (Smart Ellipsis ...)"
          description="Khi tổng số trang lớn (ví dụ 25 trang), component tự động tính toán cửa sổ trang xung quanh trang hiện tại và hiển thị dấu ba chấm."
        >
          <div className="space-y-4">
            <Pagination
              totalPages={25}
              currentPage={pageLong}
              onPageChange={setPageLong}
              siblingCount={1}
              showIcons
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Đang ở trang: <strong>{pageLong} / 25</strong>. Bấm vào trang 1, trang 12, hoặc trang 25 để xem cách dấu ba chấm di chuyển mượt mà!
            </p>
          </div>
        </Card>

        {/* 10. Styles: Rounded & Minimal */}
        <Card
          title="10. Phong cách Rounded & Minimal"
          description="Tùy biến phong cách hình tròn bo cong tách biệt (Rounded) hoặc tối giản không viền (Minimal)."
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Biến thể Rounded (Hình tròn tách rời)
              </p>
              <Pagination
                totalPages={8}
                variant="rounded"
                initialPage={3}
                showIcons
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Biến thể Minimal (Tối giản trong suốt)
              </p>
              <Pagination
                totalPages={8}
                variant="minimal"
                initialPage={2}
                showIcons
              />
            </div>
          </div>
        </Card>
      </div>
    </TestPageLayout>
  );
}
