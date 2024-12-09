document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các liên kết bài viết
    const links = Array.from(document.querySelectorAll('.md-nav__link'));
    const nextButton = document.querySelector('.md-footer__button--next');

    if (links.length > 0 && nextButton) {
        // Chọn ngẫu nhiên một bài viết
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex].href;

        // Cập nhật liên kết "Next" để trỏ tới bài ngẫu nhiên
        nextButton.href = randomLink;
        nextButton.textContent = "Next (Random)";
    }
});
