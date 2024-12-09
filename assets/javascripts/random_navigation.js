document.addEventListener("DOMContentLoaded", function () {
    // Đường dẫn tới tệp sitemap.xml
    const sitemapUrl = "/sitemap.xml";

    // URL hiện tại
    const currentUrl = window.location.href;

    // Fetch sitemap.xml
    fetch(sitemapUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const sitemap = parser.parseFromString(data, "application/xml");
            const urls = Array.from(sitemap.querySelectorAll("url > loc")).map(el => el.textContent);

            // Lọc các URL thuộc thư mục ObsidianVault/ELT
            const eltUrls = urls.filter(url => url.includes("/ObsidianVault/ELT/"));
            eltUrls.sort(); // Đảm bảo URL được sắp xếp theo thứ tự

            // Xác định vị trí URL hiện tại
            const currentIndex = eltUrls.indexOf(currentUrl);

            // Tìm URL của bài trước (Previous) và bài sau (Next)
            const prevUrl = currentIndex > 0 ? eltUrls[currentIndex - 1] : null;
            const nextUrl = currentIndex < eltUrls.length - 1 ? eltUrls[currentIndex + 1] : null;

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
