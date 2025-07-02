//fonis cvlileba
window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const bannerBottom = banner.getBoundingClientRect().bottom;

    if (bannerBottom <= 200) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});