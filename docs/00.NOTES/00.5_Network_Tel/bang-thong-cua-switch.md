---
title: Băng thông của switch là gì
tags:
  - ELV
  - băng_thông_switch
---


![](https://res.cloudinary.com/dcqf82eor/image/upload/f_auto/v1750407743/kysudienvn/edwpautduzzlsxyscjv3.png)
---
![](https://res.cloudinary.com/dcqf82eor/image/upload/f_auto/v1750407850/kysudienvn/zms6oedsg7eyjpe2ibz9.png)
## Ví dụ
Tôi có một switch có 24 cổng LAN 1Gb/2 và 2 Cổng SFP 1Gb/s-> Tại sao băng thông switch lại là 52Gb/s? Các con số này liên hệ như thế nào.

### Trả Lời:
 - Đúng là một câu hỏi rất hay và quan trọng trong thiết kế hệ thống mạng! Nhiều người mới tiếp cận sẽ dễ bị nhầm lẫn giữa băng thông cổng và băng thông tổng của switch. Tôi sẽ giải thích mối liên hệ này một cách rõ ràng nhất.

Bạn đang đề cập đến thông số kỹ thuật của một Switch có:

- **24 cổng LAN 1Gbps** (cổng đồng RJ45)
- **2 cổng SFP 1Gbps** (cổng quang)
- Nhưng lại có **Băng thông Switch là 52Gbps**.

**Tại sao lại như vậy? Mối liên hệ giữa các con số:**

Khái niệm bạn cần hiểu ở đây là **"Switching Capacity" (Băng thông chuyển mạch hay Dung lượng chuyển mạch)"** hoặc đôi khi còn được gọi là "Backplane Speed" của Switch.

1. **Tổng Băng thông Lý thuyết của các cổng:**
    
    - Bạn có 24 cổng 1Gbps: Tổng = 24×1 Gbps=24 Gbps
    - Bạn có 2 cổng SFP 1Gbps: Tổng = 2×1 Gbps=2 Gbps
    - **Tổng lý thuyết của tất cả các cổng = 24 Gbps+2 Gbps=26 Gbps**
2. **Khái niệm Băng thông chuyển mạch (Switching Capacity):**
    
    - Switching Capacity là **khả năng tổng hợp dữ liệu mà Switch có thể xử lý và chuyển tiếp giữa tất cả các cổng của nó cùng một lúc**, theo cả hai chiều (chiều đi và chiều về - Full-duplex).
    - Một Switch hoạt động hiệu quả (non-blocking hay wire-speed) phải có **Switching Capacity bằng hoặc lớn hơn gấp đôi tổng băng thông lý thuyết của tất cả các cổng.**
    -<font color="#d83931"> Tại sao lại là gấp đôi? </font>Vì mỗi cổng có thể đồng thời **nhận (receive)** và **gửi (transmit)** dữ liệu ở tốc độ tối đa của nó (Full-duplex).
        - Ví dụ: một cổng 1Gbps có thể nhận 1Gbps VÀ gửi 1Gbps đồng thời.
        - Do đó, để tất cả các cổng có thể hoạt động ở tốc độ tối đa mà không bị tắc nghẽn, tổng băng thông chuyển mạch của Switch cần phải đủ lớn để đáp ứng nhu cầu này.
3. **Áp dụng vào ví dụ của bạn:**
    
    - Tổng băng thông lý thuyết của các cổng là 26 Gbps.
    - Để đảm bảo Switch hoạt động "Wire-speed" (không tắc nghẽn ở tốc độ tối đa), Switch cần có khả năng xử lý: 26 Gbps (chieˆˋu nhận)+26 Gbps (chieˆˋu gửi)=52 Gbps.
    - Vì vậy, con số **52 Gbps** chính là **Switching Capacity (Băng thông chuyển mạch)** của thiết bị, cho thấy rằng Switch này được thiết kế để xử lý toàn bộ lưu lượng đồng thời trên tất cả các cổng của nó mà không bị nghẽn.

**Mối liên hệ tóm tắt:**

- **24 cổng LAN 1Gbps và 2 cổng SFP 1Gbps:** Đây là số lượng và tốc độ tối đa của từng cổng riêng lẻ. Tổng số lượng cổng là 26 cổng.
- **Tổng băng thông lý thuyết của các cổng:** 26 Gbps (tính theo một chiều truyền).
- **Băng thông Switch (Switching Capacity) 52Gbps:** Đây là khả năng xử lý tổng lưu lượng của toàn bộ Switch, đảm bảo rằng tất cả 26 cổng đều có thể hoạt động ở chế độ Full-duplex (vừa nhận vừa gửi) với tốc độ tối đa của chúng (1Gbps) mà không bị tắc nghẽn. Nó gấp đôi tổng băng thông lý thuyết của các cổng.

Một Switch có Switching Capacity lớn hơn hoặc bằng tổng băng thông Full-duplex của tất cả các cổng được gọi là **Switch non-blocking** hoặc **wire-speed**, nghĩa là nó có thể chuyển tiếp lưu lượng dữ liệu ở tốc độ tối đa mà không gây ra hiện tượng nghẽn cổ chai bên trong. Đây là một tiêu chí quan trọng để đánh giá hiệu suất của một Switch, đặc biệt là trong các hệ thống yêu cầu băng thông cao như CCTV.