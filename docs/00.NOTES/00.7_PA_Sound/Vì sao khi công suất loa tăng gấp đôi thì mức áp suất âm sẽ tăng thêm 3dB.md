---
image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAwOTd8MHwxfHNlYXJjaHwyMnx8YmFubmVyfGVufDB8MHx8fDE3NTQ0NTMyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
tags:
  - ÂM_THANH_THÔNG_BÁO
image_y: 0.5
---

Khi công suất tăng gấp đôi, **SPL (Mức áp suất âm thanh) sẽ tăng thêm 3 dB**.

---

## Giải thích chi tiết

Mối quan hệ giữa công suất (Power) và Mức áp suất âm thanh (SPL) là **logarit**, không phải tuyến tính. Điều này có nghĩa là bạn không cần tăng gấp đôi công suất để tăng gấp đôi độ to cảm nhận được, mà chỉ cần tăng công suất đủ để đạt mức tăng 3 dB.

Công thức tính mức áp suất âm thanh dựa trên công suất đầu vào là:

SPLnew​=SPLreference​+10×log10​(Preference​Pnew​​)

Trong đó:

- SPLnew​ là mức SPL mới khi có công suất Pnew​.
    
- SPLreference​ là mức SPL tham chiếu ở công suất Preference​ (thường là độ nhạy của loa ở 1W/1m).
    
- Pnew​ là công suất mới.
    
- Preference​ là công suất tham chiếu (ví dụ: 1W).
    

### Áp dụng khi công suất tăng gấp đôi:

Giả sử Pnew​=2×Preference​ (công suất tăng gấp đôi).

SPLnew​=SPLreference​+10×log10​(Preference​2×Preference​​) SPLnew​=SPLreference​+10×log10​(2)

Vì log10​(2)≈0.301, ta có:

SPLnew​=SPLreference​+10×0.301 SPLnew​=SPLreference​+3.01

Làm tròn, chúng ta có **3 dB**.

### Ví dụ:

- Nếu loa có độ nhạy là **96 dB @ 1W/1m**:
    
    - Với công suất 1W, SPL là 96 dB.
        
    - Khi công suất tăng gấp đôi lên 2W, SPL sẽ là 96+3=99dB.
        
    - Khi công suất tăng gấp đôi một lần nữa lên 4W, SPL sẽ là 99+3=102dB.
        
    - Và cứ tiếp tục như vậy.
        

### Tóm tắt:

Mỗi khi bạn **gấp đôi công suất** đầu vào cho loa, mức áp suất âm thanh (SPL) của loa sẽ **tăng thêm xấp xỉ 3 dB**. Điều này có nghĩa là để tăng SPL lên 6 dB (tức là làm âm thanh to gấp đôi theo cảm nhận của tai người), bạn cần tăng công suất lên gấp 4 lần.