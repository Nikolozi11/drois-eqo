function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}


//nav mozraobaw
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

//info
function toggle(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}



