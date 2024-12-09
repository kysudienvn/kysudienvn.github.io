document.addEventListener("DOMContentLoaded", function () {
    // Danh sách tất cả các tệp Markdown trong thư mục ELT
    const markdownFiles = [
        "docs/ObsidianVault/ELT/file1.md",
        "docs/ObsidianVault/ELT/file2.md",
        "docs/ObsidianVault/ELT/file3.md"
    ];

    // URL hiện tại
    const currentPath = window.location.pathname;
    const currentIndex = markdownFiles.findIndex(path => currentPath.endsWith(path));

    // Xác định bài viết trước (Previous) và bài viết sau (Next)
    const prevFile = currentIndex > 0 ? markdownFiles[currentIndex - 1] : null;
    const nextFile = currentIndex < markdownFiles.length - 1 ? markdownFiles[currentIndex + 1] : null;

    // Cập nhật liên kết Previous và Next
    const prevButton = document.querySelector('.md-footer__button--prev');
    const nextButton = document.querySelector('.md-footer__button--next');

    if (prevButton && prevFile) {
        prevButton.href = "/" + prevFile;
        prevButton.textContent = "Previous";
    }

    if (nextButton && nextFile) {
        nextButton.href = "/" + nextFile;
        nextButton.textContent = "Next";
    }
});
