# Tài liệu nghiệp vụ — Hệ thống quản lý Ryokan

## 1. Mục tiêu

Hệ thống hỗ trợ vận hành một **Ryokan** (nhà trọ truyền thống Nhật Bản), từ tiếp nhận đặt phòng đến phục vụ lưu trú, trải nghiệm ẩm thực Kaiseki, onsen, dọn phòng, quản lý nhân sự và thanh toán. Mục tiêu là giảm thao tác thủ công, tránh trùng phòng và đảm bảo giá bán được áp dụng đúng theo mùa, ngày lễ và số khách.

## 2. Phạm vi

### Trong phạm vi

- Quản lý danh mục phòng phong cách Nhật và trạng thái phòng.
- Quản lý khách lưu trú, đặt phòng, nhận phòng, trả phòng và hủy đặt.
- Quản lý gói nghỉ dưỡng, bữa ăn Kaiseki và lịch sử dụng onsen.
- Lập lịch, phân công và theo dõi hoàn tất dọn phòng.
- Quản lý nhân viên phục vụ vận hành.
- Lập hóa đơn, ghi nhận thanh toán và hoàn tiền.
- Tính giá linh hoạt theo mùa, ngày lễ, hạng phòng, số khách và dịch vụ bổ sung.

### Ngoài phạm vi phiên bản đầu

- Kết nối OTA (Booking.com, Agoda, Rakuten Travel).
- Quản lý tồn kho nguyên liệu bếp chi tiết.
- Quản lý kế toán tổng hợp và kê khai thuế.
- Chương trình khách hàng thân thiết.

## 3. Vai trò người dùng

| Vai trò | Quyền nghiệp vụ chính |
| --- | --- |
| Quản trị viên | Thiết lập danh mục, giá, mùa, ngày lễ, tài khoản và xem toàn bộ báo cáo. |
| Lễ tân | Tạo/sửa đặt phòng, quản lý khách, check-in/check-out, thu tiền và xuất hóa đơn. |
| Quản lý vận hành | Theo dõi công suất phòng, điều phối dọn phòng, gói dịch vụ và xử lý ngoại lệ. |
| Nhân viên buồng phòng | Xem công việc được giao, cập nhật tiến độ và trạng thái phòng. |
| Nhân viên phục vụ | Xem danh sách khách dùng Kaiseki/onsen trong ca được phân công. |
| Kế toán | Đối soát hóa đơn, thanh toán, hoàn tiền và báo cáo doanh thu. |

## 4. Danh mục và dữ liệu cốt lõi

### 4.1. Phòng

Mỗi phòng có mã phòng, tên hiển thị, loại phòng, sức chứa tiêu chuẩn/tối đa, diện tích, số futon/giường, tiện nghi, ghi chú và trạng thái.

Các loại phòng gợi ý: Washitsu, phòng Tatami, phòng có rotenburo (bồn tắm ngoài trời riêng), phòng gia đình và suite.

Trạng thái phòng:

- `Sẵn sàng`: có thể bán hoặc nhận khách.
- `Đã giữ chỗ`: đã được gán cho một đặt phòng sắp tới.
- `Có khách`: khách đang lưu trú.
- `Chờ dọn`: khách đã trả phòng hoặc phòng cần làm sạch.
- `Đang dọn`: đang thực hiện công việc buồng phòng.
- `Bảo trì`: không được phép bán.

### 4.2. Khách lưu trú

Lưu họ tên, quốc tịch, ngày sinh (nếu cần), số điện thoại, email, giấy tờ định danh/hộ chiếu, địa chỉ, yêu cầu ăn uống/dị ứng, yêu cầu đặc biệt và lịch sử lưu trú.

Một người đại diện đặt phòng có thể khai báo nhiều khách cùng đoàn. Số lượng khách theo từng độ tuổi phải được lưu để tính giá và chuẩn bị dịch vụ.

### 4.3. Gói nghỉ dưỡng và dịch vụ

Gói nghỉ dưỡng bao gồm một hoặc nhiều thành phần: hạng phòng, bữa sáng, bữa tối Kaiseki, quyền sử dụng onsen, dịch vụ đưa đón hoặc dịch vụ bổ sung khác. Mỗi thành phần cần có lịch phục vụ, giới hạn số lượng, giá cơ sở và chính sách hủy riêng nếu có.

## 5. Quy trình nghiệp vụ

### 5.1. Đặt phòng

1. Lễ tân nhập ngày đến, ngày đi, số lượng người lớn/trẻ em và nhu cầu dịch vụ.
2. Hệ thống kiểm tra phòng còn khả dụng, phòng đang bảo trì, giới hạn sức chứa và tồn chỗ của gói dịch vụ.
3. Hệ thống tính báo giá, hiển thị chi tiết từng đêm, phụ thu và dịch vụ đi kèm.
4. Lễ tân chọn phòng/gói, khai báo khách đại diện và khách cùng đoàn, sau đó tạo đặt phòng.
5. Đặt phòng có thể ở trạng thái `Giữ chỗ`, `Đã xác nhận`, `Đã check-in`, `Đã check-out`, `Đã hủy` hoặc `Không đến`.
6. Khi có tiền cọc hoặc thanh toán trước, hệ thống ghi nhận giao dịch và số tiền còn phải thu.

Không được xác nhận hai đặt phòng có thời gian lưu trú chồng lấn cho cùng một phòng. Một đặt phòng có thể gồm nhiều phòng nếu là đoàn.

### 5.2. Check-in và check-out

Khi check-in, lễ tân xác minh thông tin khách, xác nhận số khách thực tế, thu phần tiền còn lại theo chính sách, gán phòng và chuyển phòng sang trạng thái `Có khách`.

Khi check-out, lễ tân chốt các dịch vụ phát sinh, lập hóa đơn cuối cùng, nhận thanh toán/hoàn tiền nếu có và chuyển phòng sang `Chờ dọn`. Phòng chỉ trở về `Sẵn sàng` khi công việc dọn phòng đã hoàn tất.

### 5.3. Kaiseki và onsen

- Khách chọn suất Kaiseki theo ngày, ca phục vụ, số khách và thực đơn phù hợp chế độ ăn/dị ứng.
- Hệ thống phải có danh sách phục vụ theo ca để bếp và nhân viên nhà hàng chuẩn bị.
- Onsen được quản lý theo loại (công cộng, riêng tư), khung giờ, sức chứa và giới tính/quy định sử dụng nếu áp dụng.
- Với onsen riêng tư, không cho phép các lượt đặt trùng khung giờ; khách có thể đổi hoặc hủy theo chính sách.

### 5.4. Dọn phòng và nhân viên

Hệ thống tự sinh công việc dọn phòng sau check-out và có thể sinh công việc dọn định kỳ cho khách đang lưu trú. Quản lý phân công theo ca, khu vực, kỹ năng và khối lượng công việc.

Nhân viên cập nhật trạng thái `Chưa bắt đầu`, `Đang làm`, `Hoàn tất` hoặc `Có vấn đề`; với vấn đề cần ghi chú và có thể chuyển phòng sang `Bảo trì`. Quản lý có thể theo dõi các phòng chưa sẵn sàng trước giờ nhận khách.

### 5.5. Hóa đơn và thanh toán

Hóa đơn gồm tiền phòng theo từng đêm, giá gói, Kaiseki, onsen, phụ thu số khách, dịch vụ phát sinh, giảm giá, thuế/phí (nếu áp dụng), tiền cọc và số dư.

Hệ thống hỗ trợ tiền mặt, thẻ, chuyển khoản và thanh toán kết hợp. Mọi giao dịch phải lưu thời điểm, số tiền, phương thức, người thực hiện và mã tham chiếu. Hủy đặt hoặc điều chỉnh hóa đơn phải tạo lịch sử thay đổi; hoàn tiền không được làm mất dữ liệu giao dịch gốc.

## 6. Quy tắc tính giá

### 6.1. Thành phần giá

Giá phòng cho mỗi đêm được xác định theo công thức:

`Giá đêm = Giá cơ sở hạng phòng + điều chỉnh mùa/ngày lễ + phụ thu số khách + giá dịch vụ/gói - giảm giá`

- Giá cơ sở được thiết lập theo loại phòng hoặc từng phòng.
- Mùa giá có ngày bắt đầu/kết thúc, ưu tiên và hệ số hoặc mức giá thay thế.
- Ngày lễ có mức ưu tiên cao hơn mùa thông thường khi trùng ngày.
- Giá bao gồm số khách tiêu chuẩn; người vượt số này chịu phụ thu theo nhóm tuổi và không được vượt sức chứa tối đa.
- Giá Kaiseki, onsen và dịch vụ bổ sung có thể tính theo người, theo lượt hoặc theo gói.
- Quy tắc ưu đãi phải nêu rõ có được cộng dồn hay không.

### 6.2. Thứ tự áp dụng

1. Kiểm tra giá ngày lễ đặc biệt.
2. Nếu không có, áp dụng mùa có ưu tiên cao nhất.
3. Nếu không có, dùng giá cơ sở.
4. Áp dụng phụ thu số khách, dịch vụ lựa chọn và ưu đãi hợp lệ.
5. Làm tròn theo đơn vị tiền tệ được cấu hình; lưu chi tiết giá đã chốt vào đặt phòng để không bị ảnh hưởng bởi thay đổi bảng giá về sau.

## 7. Yêu cầu chức năng chính

- Tìm phòng trống theo thời gian, sức chứa, loại phòng và dịch vụ.
- Tạo, điều chỉnh, chuyển phòng, hủy và khôi phục đặt phòng theo quyền hạn.
- Tự động cảnh báo trùng phòng, quá sức chứa, gói hết chỗ và khách có yêu cầu đặc biệt.
- Hiển thị lịch phòng theo ngày/tuần và bảng trạng thái vận hành trong ngày.
- Quản lý bảng giá mùa, ngày lễ, phụ thu, khuyến mãi và chính sách hủy có hiệu lực theo thời gian.
- Quản lý ca làm, nhân viên, công việc dọn phòng và cảnh báo công việc quá hạn.
- Lập hóa đơn tạm tính/final, in hoặc xuất hóa đơn và tra cứu giao dịch.
- Báo cáo công suất phòng, doanh thu phòng/dịch vụ, số suất Kaiseki, tình trạng dọn phòng và danh sách khách lưu trú.

## 8. Yêu cầu phi chức năng

- Phân quyền theo vai trò; người dùng chỉ được thao tác dữ liệu cần thiết.
- Lưu nhật ký cho thay đổi đặt phòng, giá, hóa đơn, thanh toán và trạng thái phòng.
- Bảo vệ dữ liệu cá nhân của khách; chỉ người được phân quyền mới xem giấy tờ định danh.
- Thời gian phản hồi tìm phòng và lập báo giá mục tiêu dưới 3 giây trong điều kiện vận hành thông thường.
- Dữ liệu tiền tệ dùng số thập phân chính xác, không dùng kiểu số thực nhị phân.

## 9. Báo cáo/KPI đề xuất

- Công suất phòng theo ngày, tuần, tháng và loại phòng.
- Doanh thu theo tiền phòng, Kaiseki, onsen và dịch vụ khác.
- Giá bán bình quân theo phòng/đêm và doanh thu bình quân trên khách.
- Danh sách khách đến, đang ở, trả phòng và không đến trong ngày.
- Tỷ lệ hoàn tất dọn phòng đúng giờ và số phòng bảo trì.
- Tỷ lệ hủy đặt, doanh thu đã hoàn/tiền cọc chưa đối soát.

## 10. Tiêu chí nghiệm thu tối thiểu

- Không thể tạo đặt phòng xác nhận khi không còn phòng phù hợp hoặc vượt sức chứa.
- Báo giá hiển thị được chi tiết giá từng đêm và các phụ thu/dịch vụ.
- Check-out tạo được hóa đơn tổng hợp và một công việc dọn phòng tương ứng.
- Phòng chỉ được bán lại khi trạng thái là `Sẵn sàng`.
- Đặt onsen riêng tư không bị trùng khung giờ và không vượt sức chứa.
- Mọi thay đổi về giá sau khi đặt không làm thay đổi giá đã chốt của đặt phòng hiện có.
- Báo cáo doanh thu đối soát được với tổng các giao dịch thanh toán hợp lệ.
