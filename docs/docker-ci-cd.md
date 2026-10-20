# Docker và CI/CD

## Chạy cục bộ

1. Cài Docker Desktop.
2. Tạo tệp cấu hình: `cp .env.example .env`.
3. Đổi `POSTGRES_PASSWORD` trong `.env`.
4. Chạy toàn bộ hệ thống: `docker compose up --build`.

Sau khi khởi động, cổng khách hàng ở `http://localhost:3000`, cổng quản trị ở `http://localhost:3001`, backend ở `http://localhost:8080` và PostgreSQL ở cổng `5433` phía máy chủ (`5432` bên trong Docker; các cổng có thể thay đổi trong `.env`). Dừng dịch vụ bằng `docker compose down`; thêm `-v` chỉ khi muốn xóa dữ liệu PostgreSQL cục bộ.

Hai cổng frontend dùng cùng mã nguồn trong giai đoạn khởi tạo, nhưng được build với `NEXT_PUBLIC_PORTAL=customer` hoặc `NEXT_PUBLIC_PORTAL=admin`. Khi xây giao diện, dùng biến này để hiển thị cổng khách hàng hoặc dashboard quản trị; API backend vẫn chỉ công khai qua cổng `8080` trong môi trường phát triển.

## Phát triển với hot reload

Để sửa file frontend và xem thay đổi ngay khi lưu, chạy chế độ development thay vì image production:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

`docker-compose.dev.yml` mount thư mục `ryokan-frontend` vào container và chạy Next.js development server. Lần đầu cần cài dependencies vào Docker volume; các lần sau chỉ cần chạy lại lệnh trên. Thay đổi trong `src/` hoặc Tailwind CSS sẽ tự refresh trên `http://localhost:3000` và `http://localhost:3001`.

## CI/CD trên GitHub Actions

Workflow [ci-cd.yml](../.github/workflows/ci-cd.yml) thực hiện:

- Với pull request: chạy Maven `verify`, ESLint và build Next.js.
- Khi push vào `main`: chạy các kiểm tra trên, sau đó build và đẩy hai image lên GitHub Container Registry (GHCR).

Image được gắn thẻ `latest` và SHA commit, theo dạng `ghcr.io/<github-owner>/ryokan-frontend` và `ghcr.io/<github-owner>/ryokan-backend`.

Để pipeline có thể publish, repository cần bật quyền **Read and write permissions** cho GitHub Actions trong Settings → Actions → General → Workflow permissions. Lần publish đầu tiên có thể cần đặt package ở chế độ public hoặc cấp quyền pull cho môi trường triển khai.

## Triển khai máy chủ

Pipeline hiện dừng ở bước publish image để không tự ý truy cập máy chủ. Để triển khai tự động, cần cung cấp phương thức/kết nối đích (ví dụ SSH VPS, Kubernetes, AWS ECS hoặc Render) và các secrets tương ứng; khi đó có thể thêm một job deploy sau `publish-images`.
