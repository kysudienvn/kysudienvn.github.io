Đây là một câu hỏi rất hay và thường gặp trong thiết kế hệ thống **IBS (In-Building Solution)**. Việc **khi nào dùng coupler, khi nào dùng splitter** không chỉ ảnh hưởng đến chất lượng phủ sóng mà còn ảnh hưởng đến hiệu suất hệ thống và chi phí. Dưới đây là **giải thích rõ ràng, dễ hiểu và có công thức tính cơ bản**:

---

## 🔧 1. **Sự khác nhau giữa Coupler và Splitter**

|Đặc điểm|**Coupler**|**Splitter**|
|---|---|---|
|Chức năng chính|Chia tín hiệu **không đồng đều**|Chia tín hiệu **đều nhau**|
|Tỉ lệ chia|Ví dụ: 10dB, 6dB (90%–10%, 75%–25%)|50–50, 33–33–33... tùy số nhánh|
|Suy hao (loss)|Thấp hơn Splitter|Cao hơn|
|Ứng dụng|Dùng để "rẽ nhánh nhẹ" khi tín hiệu mạnh|Dùng để chia đều tín hiệu tới các nhánh|
|Cấu trúc|Có 3 port: Input, Output chính, Tap|Có 2, 3, 4... port, chia đều tín hiệu|
|Vị trí thường dùng|Gần nguồn, dọc trục chính|Gần các RU/anten, chia cuối nhánh|

---

## 🧠 2. **Khi nào dùng Coupler**

Dùng **khi cần rẽ nhánh nhỏ từ trục chính mà vẫn giữ tín hiệu mạnh cho đường chính**.

Ví dụ:

- Tòa nhà cao tầng có 1 trục chính chạy từ dưới lên.
    
- Tầng nào cũng cần 1 phần tín hiệu, nhưng vẫn cần duy trì tín hiệu mạnh cho các tầng cao hơn.  
    → Dùng **coupler 10dB** để lấy ra khoảng 10% tín hiệu cho tầng đó, giữ lại 90% cho lên tiếp.
    

---

## 🧠 3. **Khi nào dùng Splitter**

Dùng **khi cần chia tín hiệu đồng đều đến nhiều nhánh ngang**.

Ví dụ:

- Bạn cần phủ sóng đều cho **nhiều phòng cùng một tầng**.  
    → Dùng **splitter 2-way hoặc 4-way** để chia đều tín hiệu đến các RU hoặc anten.
    

---

## 📐 4. **Cách tính cơ bản**

### 🔸 a. Tính suy hao chia tín hiệu (theo công thức dB):

#### **Splitter**:

Với `n` nhánh, suy hao lý thuyết:

cpp

CopyEdit

`Loss (dB) = 10 × log10(n)`

Ví dụ:

- Splitter 2-way: 10 × log10(2) = **3 dB**
    
- Splitter 4-way: 10 × log10(4) = **6 dB**
    

#### **Coupler**:

Suy hao sẽ tùy theo loại (6dB, 10dB, 15dB...)  
Ví dụ coupler 10dB: 10% tín hiệu được "rẽ ra", 90% tiếp tục truyền đi.

---

## ✅ 5. Gợi ý sử dụng thực tế

|Trường hợp|Thiết bị nên dùng|
|---|---|
|Tòa nhà nhiều tầng, rẽ nhánh theo chiều đứng|Coupler|
|Phân phối tín hiệu ngang cùng tầng|Splitter|
|Anten gần nhau, chia đều|Splitter|
|Cần giảm tín hiệu ở 1 nhánh|Coupler|
---
![](https://res.cloudinary.com/dcqf82eor/image/upload/f_auto/v1747995354/x6zk46wvpvjadeixwwfm.png)
