BACnet MS/TP là một giao thức truyền thông được sử dụng rộng rãi trong các hệ thống tự động hóa tòa nhà (BMS). Nó là viết tắt của **Building Automation and Control Network Master-Slave/Token-Passing**. Giao thức này cho phép các thiết bị từ nhiều nhà sản xuất khác nhau có thể "nói chuyện" với nhau, tạo nên một hệ thống điều khiển tích hợp.

BACnet MS/TP là một giao thức truyền thông được sử dụng rộng rãi trong các hệ thống tự động hóa tòa nhà (BMS). Nó là viết tắt của **Building Automation and Control Network Master-Slave/Token-Passing**. Giao thức này cho phép các thiết bị từ nhiều nhà sản xuất khác nhau có thể "nói chuyện" với nhau, tạo nên một hệ thống điều khiển tích hợp.

---

### Cách Thức Hoạt Động

BACnet MS/TP hoạt động trên nền tảng vật lý **RS-485**, sử dụng cấu trúc liên kết dạng **dây chuyền (daisy-chain)** hoặc **bus**. Cơ chế hoạt động của nó dựa trên phương thức truyền tin **Master-Slave/Token-Passing**.

- **Master (Chủ):** Các thiết bị chính (thường là bộ điều khiển) luân phiên nhận quyền "token" (mã thông báo) để truyền dữ liệu. Khi một thiết bị master giữ token, nó có thể gửi yêu cầu hoặc lệnh đến các thiết bị khác.
    
- **Slave (Tớ):** Các thiết bị phụ (thường là cảm biến, van, rơle...) chỉ có thể phản hồi khi nhận được yêu cầu từ một thiết bị master.
    
- **Token-Passing (Chuyền mã thông báo):** Đây là cơ chế quản lý lượt truyền tin. Các thiết bị master sẽ lần lượt chuyển token cho nhau, đảm bảo mỗi thiết bị đều có cơ hội giao tiếp và tránh xung đột dữ liệu trên đường truyền.
    

---

### Ưu Điểm và Ứng Dụng

BACnet MS/TP có nhiều ưu điểm nổi bật, làm cho nó trở thành lựa chọn lý tưởng cho các hệ thống nhỏ và trung bình:

- **Chi phí thấp:** Sử dụng cáp RS-485 và các bộ điều khiển đơn giản, giúp giảm chi phí lắp đặt.
    
- **Độ tin cậy cao:** Cơ chế token-passing giúp kiểm soát chặt chẽ luồng dữ liệu, giảm thiểu xung đột và đảm bảo tính ổn định.
    
- **Phù hợp với hệ thống cục bộ:** Tốc độ truyền tải đủ nhanh (thường là 9600 - 76800 bps) cho các ứng dụng cục bộ như điều khiển AHU, FCU, van, cảm biến.
    
- **Khoảng cách truyền dài:** Cáp RS-485 có thể truyền dữ liệu lên đến 1.200 mét.
    

BACnet MS/TP thường được sử dụng ở **lớp điều khiển trường** của hệ thống BMS, nơi các thiết bị nhỏ giao tiếp với nhau và với bộ điều khiển. Đối với các hệ thống lớn hơn, nó thường được kết hợp với **BACnet/IP** thông qua một bộ định tuyến (router) để tạo thành một hệ thống tích hợp toàn diện.