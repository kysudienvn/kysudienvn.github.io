document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách tất cả các liên kết điều hướng
    const links = document.querySelectorAll('a.md-footer__link');

    // Nếu có các liên kết điều hướng "Next" hoặc "Previous"
    if (links.length > 0) {
        const randomIndex = Math.floor(Math.random() * links.length); // Chọn ngẫu nhiên
        const randomLink = links[randomIndex];

        // Thêm sự kiện click vào nút "Next"
        const nextButton = document.querySelector('.md-footer__button--next');
        if (nextButton) {
            nextButton.textContent = "Read Random Article";
            nextButton.href = randomLink.href;
        }
    }
});
