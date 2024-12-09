document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách tất cả các liên kết trong sitemap
    const basePath = window.location.origin + window.location.pathname;
    fetch(basePath + "sitemap.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const sitemap = parser.parseFromString(data, "application/xml");
            const urls = Array.from(sitemap.querySelectorAll("url > loc")).map(el => el.textContent);

            // Lọc chỉ các URL liên quan đến `docs/ObsidianVault/`
            const vaultUrls = urls.filter(url => url.includes("docs/ObsidianVault/"));

            if (vaultUrls.length > 0) {
                // Chọn một URL ngẫu nhiên
                const randomIndex = Math.floor(Math.random() * vaultUrls.length);
                const randomUrl = vaultUrls[randomIndex];

                // Cập nhật liên kết "Next" tới URL ngẫu nhiên
                const nextButton = document.querySelector('.md-footer__button--next');
                if (nextButton) {
                    nextButton.href = randomUrl;
                    nextButton.textContent = "Read Random Article";
                }
            }
        })
        .catch(error => console.error("Error loading sitemap:", error));
});
