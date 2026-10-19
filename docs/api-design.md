# Thiết kế API — Ryokan Management System

## 1. Quy ước chung

- Base URL: `/api/v1`.
- Định dạng trao đổi: `application/json`, ngày theo `YYYY-MM-DD`, thời gian theo ISO-8601 có múi giờ.
- Xác thực: `Authorization: Bearer <access-token>` (JWT). Các endpoint bên dưới yêu cầu đăng nhập trừ khi có ghi chú khác.
- Phân trang: `page` bắt đầu từ `0`, `size` mặc định `20`, tối đa `100`; kết quả trả về có `content`, `page`, `size`, `totalElements`, `totalPages`.
- Định dạng lỗi thống nhất:

```json
{
  "code": "ROOM_NOT_AVAILABLE",
  "message": "Phòng không còn khả dụng trong thời gian đã chọn.",
  "details": [{ "field": "roomId", "message": "Đã có đặt phòng chồng lấn." }],
  "traceId": "9e3e8d68-0af1-4e1d-bf70-7c9a2b1d2fe0"
}
```

Mã HTTP dùng chính: `200` thành công, `201` tạo mới, `204` không có nội dung, `400` dữ liệu không hợp lệ, `401` chưa xác thực, `403` không có quyền, `404` không tồn tại, `409` xung đột nghiệp vụ và `422` không thể xử lý theo quy tắc nghiệp vụ.

## 2. Xác thực và người dùng

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| POST | `/auth/login` | Public | Đăng nhập, nhận access/refresh token. |
| POST | `/auth/refresh` | Public | Làm mới access token. |
| POST | `/auth/logout` | Đăng nhập | Thu hồi refresh token. |
| GET | `/me` | Đăng nhập | Lấy hồ sơ và quyền hiện tại. |
| GET/POST | `/users` | Admin | Danh sách/tạo nhân viên tài khoản. |
| GET/PATCH | `/users/{id}` | Admin | Xem/cập nhật người dùng. |

`POST /auth/login`

```json
{ "username": "reception01", "password": "••••••••" }
```

```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "expiresIn": 3600,
  "user": { "id": "uuid", "fullName": "Sato Aki", "roles": ["RECEPTIONIST"] }
}
```

## 3. Phòng và cấu hình giá

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| GET/POST | `/room-types` | Manager/Admin | Danh sách/tạo loại phòng. |
| GET/PATCH/DELETE | `/room-types/{id}` | Manager/Admin | Quản lý loại phòng. |
| GET/POST | `/rooms` | Manager/Admin | Danh sách/tạo phòng. |
| GET/PATCH | `/rooms/{id}` | Manager/Admin | Xem/cập nhật phòng, tiện nghi, trạng thái. |
| PATCH | `/rooms/{id}/status` | Manager/Housekeeping | Cập nhật trạng thái phòng theo luồng hợp lệ. |
| GET/POST | `/rate-plans` | Manager/Admin | Quản lý giá cơ sở theo loại phòng. |
| GET/POST | `/season-rates` | Manager/Admin | Quản lý giá mùa. |
| GET/POST | `/holiday-rates` | Manager/Admin | Quản lý giá ngày lễ. |

`PATCH /rooms/{id}/status`

```json
{ "status": "MAINTENANCE", "note": "Điều hòa cần kiểm tra" }
```

Trạng thái hợp lệ: `READY`, `RESERVED`, `OCCUPIED`, `DIRTY`, `CLEANING`, `MAINTENANCE`. API trả `409` nếu chuyển trạng thái trái quy tắc, ví dụ đặt `READY` khi vẫn còn công việc dọn chưa hoàn tất.

## 4. Tìm phòng và báo giá

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| POST | `/availability/search` | Receptionist/Manager | Tìm phòng còn trống và báo giá. |
| POST | `/quotes` | Receptionist/Manager | Tạo báo giá có thời hạn. |
| GET | `/quotes/{id}` | Receptionist/Manager | Xem báo giá. |

`POST /availability/search`

```json
{
  "checkInDate": "2026-11-10",
  "checkOutDate": "2026-11-12",
  "adults": 2,
  "children": 1,
  "packageId": "uuid-optional",
  "roomTypeId": "uuid-optional"
}
```

```json
{
  "currency": "JPY",
  "results": [{
    "roomTypeId": "uuid",
    "roomTypeName": "Washitsu Superior",
    "availableRooms": 3,
    "capacity": { "standard": 2, "maximum": 4 },
    "price": {
      "nights": [
        { "date": "2026-11-10", "baseAmount": 30000, "seasonAdjustment": 5000, "guestSurcharge": 3000, "total": 38000 },
        { "date": "2026-11-11", "baseAmount": 30000, "seasonAdjustment": 5000, "guestSurcharge": 3000, "total": 38000 }
      ],
      "serviceAmount": 12000,
      "grandTotal": 88000
    }
  }]
}
```

## 5. Khách và đặt phòng

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| GET/POST | `/guests` | Receptionist/Manager | Tra cứu/tạo hồ sơ khách. |
| GET/PATCH | `/guests/{id}` | Receptionist/Manager | Xem/cập nhật khách. |
| GET/POST | `/reservations` | Receptionist/Manager | Danh sách/tạo đặt phòng. |
| GET/PATCH | `/reservations/{id}` | Receptionist/Manager | Xem/cập nhật đặt phòng chưa check-in. |
| POST | `/reservations/{id}/confirm` | Receptionist/Manager | Xác nhận giữ chỗ. |
| POST | `/reservations/{id}/cancel` | Receptionist/Manager | Hủy đặt và tính khoản hoàn/thu phí. |
| POST | `/reservations/{id}/check-in` | Receptionist | Check-in. |
| POST | `/reservations/{id}/check-out` | Receptionist | Check-out, tạo hóa đơn cuối. |

`POST /reservations`

```json
{
  "guestId": "uuid",
  "checkInDate": "2026-11-10",
  "checkOutDate": "2026-11-12",
  "source": "DIRECT",
  "rooms": [{ "roomId": "uuid", "adults": 2, "children": 1 }],
  "guests": [{ "guestId": "uuid", "isPrimary": true }],
  "packageId": "uuid-optional",
  "specialRequest": "Không dùng hải sản",
  "idempotencyKey": "client-generated-uuid"
}
```

`POST /reservations/{id}/check-in`

```json
{
  "actualGuests": [{ "guestId": "uuid", "roomId": "uuid" }],
  "payment": { "method": "CARD", "amount": 50000, "reference": "terminal-000123" }
}
```

## 6. Gói nghỉ dưỡng, Kaiseki và onsen

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| GET/POST | `/packages` | Manager/Admin | Quản lý gói nghỉ dưỡng. |
| GET/PATCH | `/packages/{id}` | Manager/Admin | Xem/cập nhật gói. |
| GET/POST | `/meal-slots` | Manager/Admin | Quản lý ca Kaiseki. |
| GET | `/meal-slots/{id}/bookings` | Service/Manager | Xem danh sách phục vụ theo ca. |
| POST | `/reservations/{id}/meal-bookings` | Receptionist | Đặt Kaiseki cho khách. |
| GET/POST | `/onsen-slots` | Manager/Admin | Quản lý khung giờ onsen. |
| POST | `/reservations/{id}/onsen-bookings` | Receptionist | Đặt lượt onsen. |
| DELETE | `/onsen-bookings/{id}` | Receptionist/Manager | Hủy lượt onsen. |

`POST /reservations/{id}/onsen-bookings`

```json
{ "onsenSlotId": "uuid", "bookingDate": "2026-11-10", "guests": 3 }
```

API trả `409` nếu ca onsen riêng đã có lượt trùng, hoặc `422` nếu số khách vượt sức chứa.

## 7. Dọn phòng và nhân sự

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| GET/POST | `/housekeeping-tasks` | Manager | Danh sách/tạo việc dọn phòng. |
| PATCH | `/housekeeping-tasks/{id}` | Manager/Housekeeping | Phân công, đổi ưu tiên/hạn hoàn thành. |
| POST | `/housekeeping-tasks/{id}/start` | Housekeeping | Bắt đầu công việc. |
| POST | `/housekeeping-tasks/{id}/complete` | Housekeeping | Hoàn tất dọn và đưa phòng về sẵn sàng. |
| POST | `/housekeeping-tasks/{id}/report-issue` | Housekeeping | Báo sự cố, chuyển phòng bảo trì. |

`POST /housekeeping-tasks/{id}/complete`

```json
{ "note": "Đã thay futon và bổ sung amenities", "completedAt": "2026-11-12T11:20:00+09:00" }
```

## 8. Hóa đơn, thanh toán và báo cáo

| Method | Endpoint | Vai trò | Mục đích |
| --- | --- | --- | --- |
| GET | `/invoices` | Receptionist/Accountant/Manager | Tra cứu hóa đơn. |
| GET | `/invoices/{id}` | Receptionist/Accountant/Manager | Xem chi tiết hóa đơn. |
| POST | `/invoices/{id}/payments` | Receptionist/Accountant | Ghi nhận thanh toán. |
| POST | `/payments/{id}/refunds` | Accountant/Manager | Hoàn tiền có lý do. |
| GET | `/reports/occupancy` | Manager/Accountant | Báo cáo công suất phòng. |
| GET | `/reports/revenue` | Manager/Accountant | Báo cáo doanh thu và đối soát. |

`POST /invoices/{id}/payments`

```json
{ "method": "CASH", "amount": 38000, "paidAt": "2026-11-12T10:30:00+09:00", "reference": null }
```

## 9. Quy tắc API quan trọng

- Request tạo đặt phòng, thanh toán và hoàn tiền phải gửi `Idempotency-Key` để tránh tạo giao dịch trùng khi retry.
- Khi tạo/xác nhận đặt phòng, backend phải khóa hoặc kiểm tra nguyên tử khả dụng của phòng trong transaction; không tin dữ liệu từ báo giá cũ.
- Giá chi tiết được snapshot vào `reservation_room_nights` và `invoice_lines`; thay đổi bảng giá chỉ ảnh hưởng yêu cầu mới.
- Không xóa cứng hóa đơn, thanh toán, đặt phòng đã phát sinh; dùng trạng thái, audit log hoặc soft delete theo chính sách.
