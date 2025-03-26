let prevScrollpos = window.pageYOffset;
const footer = document.querySelector('.footer');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        footer.computedStyleMap.transform = 'translateY(0)';
    } else {
        footer.computedStyleMap.transform = 'translateY(100%)';
    }
    prevScrollpos = currentScrollPos;
}