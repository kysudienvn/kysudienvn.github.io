document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách các URL bài viết từ sitemap.xml
    const basePath = window.location.origin + window.location.pathname;
    fetch(basePath + "sitemap.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const sitemap = parser.parseFromString(data, "application/xml");
            const urls = Array.from(sitemap.querySelectorAll("url > loc")).map(el => el.textContent);

            // Lọc chỉ các URL liên quan đến `docs/ObsidianVault/`
            const vaultUrls = urls.filter(url => url.includes("docs/ObsidianVault/"));
            vaultUrls.sort(); // Đảm bảo danh sách theo thứ tự (nếu cần)

            // Lấy URL hiện tại
            const currentUrl = window.location.href;

            // Xác định bài trước (Previous) và bài sau (Next)
            const currentIndex = vaultUrls.indexOf(currentUrl);
            const prevUrl = currentIndex > 0 ? vaultUrls[currentIndex - 1] : null;
            const nextUrl = currentIndex < vaultUrls.length - 1 ? vaultUrls[currentIndex + 1] : null;

            // Cập nhật nút Previous và Next
            const prevButton = document.querySelector('.md-footer__button--prev');
            const nextButton = document.querySelector('.md-footer__button--next');

            if (prevButton && prevUrl) {
                prevButton.href = prevUrl;
                prevButton.textContent = "Previous";
            }

            if (nextButton && nextUrl) {
                nextButton.href = nextUrl;
                nextButton.textContent = "Next";
            }
        })
        .catch(error => console.error("Error loading sitemap:", error));
});
