---
title: KNX
aliases: 
tags:
  - knx
  - mepf
  - smarthome
date: 
url: 
author: 
Releated:
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/lJ6s1hvzAuk?si=KLUcNHQvAyBjnnnh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
# ==PHẦN 1 KNX LÀ GÌ==
KNX là tiêu chuẩn toàn cầu cho hệ thống quản lý, điểu khiển tòa nhà thông minh, được phát triển trên nền ba tiêu chuẩn trước đó : European Home Systems Protocol (EHS), BatiBUs, European Installation Bus (EIB). KNX được chuẩn hóa từ EN 50090, ISO/IEC 14543 và quản lý bởi hiệp hội KNX quốc tế.
![](https://i.imgur.com/nACgt70.png)
- Tính đến tháng 11/2012 Hiệp hội KNX đã có hơn 300 thành viên/nhà sản xuất ( ABB, Bosh, FUjisu General, Simens, Toshiba..)tại hơn 33 quốc gia và có quan hệ đối tác với hơn 30.000 công ty tại 100 quốc gia và nhiều trường đại học, trung tâm nghiên cứu trên toàn thế giới
# SƠ ĐỒ KIẾN TRÚC HỆ THỐNG KNX
Các thiết bị KNX thường được ==kết nối bằng một cặp bus xoắn== và có thể được sửa đổi từ bộ điều khiển. Dây BUS được định tuyến song song với việc cung cấp năng lượng điện cho tất cả các thiết bị và hệ thống trên mạng liên kết
- Các cảm biến ( nút ấn số, bộ điều nhiệt, máy đo gió, chuyển động) thu thập thông tin và ==gửi nó trên hệ thống dây BUS dạng điện tín dữ liệu==;
- Thiết bị truyền động ( bộ phận làm mờ, van sưởi, màn hình) nhận các bức điện dữ liệu sau đó chuyển đổi thành hành động
- Bộ điều khiển và các chức năng logic khác ( bộ điều khiển nhiệt độ phòng, bộ điều khiển màn trập )
- ![](https://i.imgur.com/IquFUOW.png)

# CÁC THÀNH PHẦN CƠ BẢN HỆ THỐNG KNX
## ==những thành phần cần thiết cho hệ thống==
Nguồn điện cho BUS ( Power supply 30V)
Bộ Nối ( Couper)
## Nhận phát lệnh ( sensors: nút bấm, đo nhiệt độ, đo ánh sáng, sự hiện diện)
- Nhận tín hiệu từ bên ngoài ( nút bấm, nhiệt độ thay đổi)
- Chuyển dạng tín hiệu đó thành dạng tín hiệu KNX ( tín hiệu) gửi KNX lên BUS
## Thực thi lệnh ( actuators: relay mở đèn, giảm độ sáng, mở máy...)
- Nhận một tín hiệu từ BUS
- Xử lý thoogn tin trong tín hiêu nhận được
- Thực hiện chức năng
## Lệnh Binary ( tắt/mở): Nút bẩm
## Lệnh Analogic ( biến đổi theo dải tần): đồng hồ, máy đo sức gió, mưa, ánh sáng,nhiệt độ, CO2...

- Những chức năng - những sensors nhận tín hiệu vật lý ( bấm nút, gió..) và biến nó thành một tín hiệu KNX
- Switch actuator: kích hoạt trạng thái (on/off relay)
- Dimming actuatỏ: kích hoạt theo dải tần ( thay đổi độ sáng nhiệt độ)
- Blind/Roller Shutter actuator : kích hoạt màn, cửa chớp
- Heating actuator: kích hoạt sưởi.
# MÔ HÌNH HOẠT ĐỘNG CỦA KNX
- Các mô hình ứng dụng liên kết và phân phối cho các nhiệm vụ tự động hóa trong tòa nhà. Các lượt đồ cho cấu hình và quản lý tài nguyên trên mạng và cho phép ràng buộc các phần của ứng dụng phân tán trong các nút khác nhau.
- Một hệ thống giao tiếp với giao thức tin nhắn và mô hình cho ngăn xếp giao tiếp trong mỗi nút 
- Các mô hình để hiện thức hóa các yếu tô snayf khi phát triển các thiết bị thức tế sẽ được gắn kết và liên kết trong một bản cài đặt.
# ỨNG DỤNG TRUYỀN THÔNG KNX VÀO SMART HOME
## Chiếu sáng thông minh
- Ứng dụng nhà thông minh KNX cơ bản nhất
	- bật tắt một hoặc nhiều vị trí
	- Điều khiển trung tâm, chỉ với một nút ấn có thể bật/tắt nhiều thiết bị cùng lúc
	- Điều chỉnh độ sáng đèn từ một hoặc nhiều vị trí
	- Chế độ đèn cầu thang- tự động tắt sau thời gian trễ ( có thể cài đặt)
	- Đèn toilet- tự động tắt sau thời gian trễ ( có thể cài đặt)
	- Bật tắc theo thời gian lập trình
	- Bật tắc các ổ căm máy pha ca phê, bàn ủi, TV, DVD
	- Cảm biến tự động bật đèn cầu thang, toilet, hành lang, Tích hợp cảm biến đo ánh sáng ban ngày chỉ bật đèn tự động khi không đủ sáng.
	- Lập trình các ngữ cảnh cho một hoặc nhiều nhóm đèn, kết hợp các hệ thống khác như rèm cửa, âm thanh...
	- Nút ẩn khẩn cấp khi nhấn hoặc phát hiện đột nhập vào ban đêm sẽ tự động bật các đèn định sẵn để xua đuổi.
	- Hiển thị trạng thái các thiết bị trên màn hình trung tâm, điện thoại
	-Rèm cửa, cửa cuốn,màn chiếu
		-Điều khiển đogns mở rèm từ một hoặc nhiều vị trí
###  Điều khiển hệ thống điều hòa không khí
	- ![](https://i.imgur.com/vFq3rpH.png)

# SMART SOLUTIONS FOR BUILDINGS ABB i-Bus KNX Apllocations

- Dây màu đen : dây cấp nguồn.
- Dây màu xanh là đường I-Bus
- 
![](https://i.imgur.com/QGSUfPi.png)
![](https://i.imgur.com/SUi7ud3.png)

![](https://i.imgur.com/U2WDM9i.png)
## Bộ điều khiển mở rèm
![](https://i.imgur.com/wNgRfk6.png)
## Bộ điều khiển phòng điển hình
 ### Thành phần
 - Bộ xử lý trung tâm
 - các thiết bị ngõ vào
 - 
![](https://i.imgur.com/01r2lRG.png)
![](https://i.imgur.com/gdrL8X0.png)
