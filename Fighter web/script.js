let prevScrollPos = window.pageYOffset;
const footer = document.querySelector('.footer');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        footer.style.transform = 'translateY(0)';
    } else {
        footer.style.transform = 'translateY(100%)';
    }
    prevScrollPos = currentScrollPos;
}

function openNav() {
    document.getElementById('mySidepanel').style.width = '250px';
}
function closeNav() {
    document.getElementById('mySidepanel').style.width = '0';
}