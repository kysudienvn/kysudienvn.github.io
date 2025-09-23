### 1. Bộ điều khiển sạc PWM (Pulse Width Modulation)

**Nguyên lý hoạt động:**

Bộ điều khiển PWM hoạt động giống như một công tắc điện tử. Khi ắc quy chưa đầy, nó sẽ bật công tắc để dòng điện từ tấm pin mặt trời đi thẳng vào ắc quy. Khi ắc quy gần đầy, bộ điều khiển sẽ bắt đầu bật và tắt công tắc liên tục với tần số cao. Quá trình này được gọi là **điều chế độ rộng xung** (Pulse Width Modulation).

- **Thời gian bật** (duty cycle) sẽ được giảm dần khi ắc quy đầy hơn, giúp giảm dòng sạc và duy trì điện áp ắc quy ở mức an toàn, tránh sạc quá mức.
    
- **Điện áp đầu ra** của bộ điều khiển PWM sẽ được kéo về bằng điện áp của ắc quy. Ví dụ: nếu tấm pin có điện áp 18V, nhưng ắc quy chỉ có 12V, thì dòng điện từ pin sẽ được sạc vào ắc quy ở mức 12V. Phần chênh lệch điện áp (6V) sẽ bị lãng phí dưới dạng nhiệt năng.
    

**Ưu điểm:**

- **Giá thành rẻ.**
    
- Đơn giản, dễ sử dụng.
    

**Nhược điểm:**

- **Hiệu suất thấp** (khoảng 70-80%). Do điện áp của pin bị kéo về bằng điện áp ắc quy, nên không tận dụng được tối đa công suất của tấm pin, đặc biệt là trong điều kiện trời nắng gắt.
    
- Chỉ hiệu quả với các hệ thống nhỏ, công suất thấp.

![](https://res.cloudinary.com/dcqf82eor/image/upload/f_auto/v1758620111/civil%203D/mqcutltmf4eanipthelr.png)
---
