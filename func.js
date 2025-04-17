window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const bannerBottom = banner.getBoundingClientRect().bottom;

    if (bannerBottom <= 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});






document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById('footer');
    let lastScrollTop = 0;
    let hideTimeout;

    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll < lastScrollTop) {
            footer.classList.add('show');
            clearTimeout(hideTimeout);

            // 5 წამში გაქრეს
            hideTimeout = setTimeout(() => {
                footer.classList.remove('show');
            }, 5000);
        } else {
            footer.classList.remove('show');
            clearTimeout(hideTimeout);
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});