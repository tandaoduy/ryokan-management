# Docker và CI/CD

## Chạy cục bộ

1. Cài Docker Desktop.
2. Tạo tệp cấu hình: `cp .env.example .env`.
3. Đổi `POSTGRES_PASSWORD` trong `.env`.
4. Chạy toàn bộ hệ thống: `docker compose up --build`.

Sau khi khởi động, frontend ở `http://localhost:3000`, backend ở `http://localhost:8080` và PostgreSQL ở cổng `5433` phía máy chủ (`5432` bên trong Docker; các cổng có thể thay đổi trong `.env`). Dừng dịch vụ bằng `docker compose down`; thêm `-v` chỉ khi muốn xóa dữ liệu PostgreSQL cục bộ.

## CI/CD trên GitHub Actions

Workflow [ci-cd.yml](../.github/workflows/ci-cd.yml) thực hiện:

- Với pull request: chạy Maven `verify`, ESLint và build Next.js.
- Khi push vào `main`: chạy các kiểm tra trên, sau đó build và đẩy hai image lên GitHub Container Registry (GHCR).

Image được gắn thẻ `latest` và SHA commit, theo dạng `ghcr.io/<github-owner>/ryokan-frontend` và `ghcr.io/<github-owner>/ryokan-backend`.

Để pipeline có thể publish, repository cần bật quyền **Read and write permissions** cho GitHub Actions trong Settings → Actions → General → Workflow permissions. Lần publish đầu tiên có thể cần đặt package ở chế độ public hoặc cấp quyền pull cho môi trường triển khai.

## Triển khai máy chủ

Pipeline hiện dừng ở bước publish image để không tự ý truy cập máy chủ. Để triển khai tự động, cần cung cấp phương thức/kết nối đích (ví dụ SSH VPS, Kubernetes, AWS ECS hoặc Render) và các secrets tương ứng; khi đó có thể thêm một job deploy sau `publish-images`.
