Modbus và BACnet là hai giao thức truyền thông phổ biến nhất trong hệ thống tự động hóa tòa nhà (BMS) và tự động hóa công nghiệp.

1-Giao thức BACnet ( Building Automation and Control network) : là giao thức truyền thông mở được thiết kế riêng cho các ứng dụng tự động hóa và điều khiển tòa nhà.
- Nó được phát triển bởi ASHARE ( Hiệp hội Kỹ sư Nhiệt lạnh và Điều hòa không khí Mỹ) và trở thành một tiêu chuẩn quốc tế (ISO 16484-5).
- **Mô hình truyền thông:** BACnet hoạt động theo mô hình **peer-to-peer (ngang hàng)**. Các thiết bị có thể tự động giao tiếp và trao đổi dữ liệu với nhau mà không cần một thiết bị trung tâm (master) điều khiển.
- **Cấu trúc dữ liệu:** BACnet sử dụng mô hình **hướng đối tượng (object-oriented)**. Dữ liệu của các thiết bị được tổ chức thành các đối tượng chuẩn (objects) như `Analog Input`, `Binary Output`, `Schedule`,... Điều này giúp việc tích hợp các thiết bị từ nhiều nhà sản xuất khác nhau trở nên dễ dàng và chuẩn hóa hơn.
- - **Tính năng nổi bật:** Một trong những ưu điểm lớn nhất của BACnet là khả năng **tự động phát hiện thiết bị** (auto-discovery) thông qua các dịch vụ như "Who-Is" (Ai là?) và "I-Am" (Tôi là).
    
- **Ứng dụng:** BACnet rất phù hợp cho việc tích hợp và quản lý các hệ thống phức tạp, quy mô lớn như HVAC, chiếu sáng, hệ thống PCCC, và an ninh trong một tòa nhà.