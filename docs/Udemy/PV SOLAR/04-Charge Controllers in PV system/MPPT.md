### 2. Bộ điều khiển sạc MPPT (Maximum Power Point Tracking)

**Nguyên lý hoạt động:**

Bộ điều khiển MPPT phức tạp và thông minh hơn nhiều. Nó có một bộ chuyển đổi DC-DC và một thuật toán để liên tục quét và tìm ra **điểm công suất tối đa** (Maximum Power Point) của tấm pin mặt trời.

- Khi tìm thấy điểm này, nó sẽ điều chỉnh điện áp và dòng điện để luôn lấy được công suất cao nhất từ pin.
    
- Bộ điều khiển MPPT sau đó sẽ chuyển đổi điện áp cao từ tấm pin thành dòng điện lớn hơn để sạc vào ắc quy. Ví dụ: nếu tấm pin tạo ra 18V và 5A (tương đương 90W), bộ điều khiển MPPT sẽ chuyển đổi thành 12V và 7.5A (vẫn là 90W) để sạc vào ắc quy.
    
- Không có năng lượng bị lãng phí do chênh lệch điện áp.
    

**Ưu điểm:**

- **Hiệu suất cao** (trên 95%). Tăng hiệu quả sạc từ 20-30% so với PWM.
    
- Đặc biệt hiệu quả trong điều kiện thời tiết xấu, nhiều mây, hoặc nhiệt độ cao.
    
- Có thể sử dụng tấm pin có điện áp cao hơn điện áp của ắc quy.
    

**Nhược điểm:**

- **Giá thành cao.**
    
- Phức tạp hơn, thường có màn hình LCD hiển thị thông số chi tiết.