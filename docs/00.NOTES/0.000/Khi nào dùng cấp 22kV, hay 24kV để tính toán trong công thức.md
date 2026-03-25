---
title: Khi nào dùng cấp 22kV, hay 24kV để tính toán trong công thức
TIME:
aliases:
tags:
  - nontag
date: 2026-03-25
url:
author:
Releated:
Platform:
media:
---

Đây là một câu hỏi rất hay vì trong các bản vẽ và thiết kế tại Việt Nam, hai con số **22kV** và **24kV** thường xuyên xuất hiện đan xen, dễ gây nhầm lẫn.

Việc dùng con số nào phụ thuộc vào việc bạn đang tính toán **Thông số vận hành** hay **Thông số thiết bị**. Quy tắc cụ thể như sau:

---

### 1. Khi nào dùng 22kV? (Tính toán Công suất, Dòng điện)

Bạn dùng **22kV** (hoặc chính xác hơn là $22 \times 1,1 = 23,1$ hoặc $22 / \sqrt{3}$) khi tính toán các giá trị liên quan đến **vận hành thực tế**.

- **Tính dòng điện định mức ($I_{dm}$):** Để chọn tiết diện cáp, chọn dòng sơ cấp của CT (như chúng ta vừa làm ở trên).
    
    - Công thức: $I = \frac{S}{\sqrt{3} \times U}$ (Trong đó $U = 22$ kV).
        
- **Tính toán sụt áp:** Kiểm tra xem cuối đường dây điện áp có bị thấp hơn 22kV quá mức cho phép không.
    
- **Tính toán tổn thất điện năng:** Dựa trên điện áp vận hành thực tế của lưới điện Việt Nam (trung thế phổ biến là 22kV).
    

### 2. Khi nào dùng 24kV? (Chọn Thiết bị, Cách điện)

Bạn dùng **24kV** khi xem xét về **khả năng chịu đựng và an toàn** của thiết bị. Đây được gọi là **Điện áp định mức của thiết bị ($U_m$)**.

- **Chọn cấp điện áp cho tủ trung thế (RMU, VCB):** Các thiết bị này phải có mức chịu đựng cao hơn điện áp lưới để đảm bảo an toàn khi có dao động. Tiêu chuẩn thường là 24kV cho lưới 22kV.
    
- **Chọn cấp cách điện cho cáp:** Bạn sẽ thấy cáp ghi là $12/20(24)$ kV. Con số 24kV ở đây là mức điện áp cao nhất mà lớp cách điện của cáp có thể chịu được liên tục mà không bị phóng điện.
    
- **Khoảng cách an toàn phóng điện:** Khi thiết kế trạm biến áp, các khoảng cách an toàn giữa các pha hoặc pha với đất phải tính toán dựa trên mức 24kV để đảm bảo dự phòng an toàn.
    

---

### Tóm tắt bảng so sánh

| **Mục đích tính toán**  | **Con số sử dụng** | **Ví dụ**                                         |
| ----------------------- | ------------------ | ------------------------------------------------- |
| **Dòng điện ($I$)**     | **22 kV**          | $I = S / (\sqrt{3} \times 22)$                    |
| **Công suất ($P, S$)**  | **22 kV**          | $P = \sqrt{3} \times 22 \times I \times \cos\phi$ |
| **Chọn Model thiết bị** | **24 kV**          | Tủ RMU 24kV, Máy cắt 24kV                         |
| **Độ bền cách điện**    | **24 kV**          | Cáp ngầm 24kV, Sứ cách điện 24kV                  |