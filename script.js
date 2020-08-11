const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function runAnim(nav, id, slidein) {
    if (slidein) {
        nav.classList.remove(`slide-out-${id}`);
        nav.classList.add(`slide-in-${id}`);
    } else {
        nav.classList.remove(`slide-in-${id}`);
        nav.classList.add(`slide-out-${id}`);
    }
}

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animatein overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        runAnim(nav1, 1, true);
        runAnim(nav2, 2, true);
        runAnim(nav3, 3, true);
        runAnim(nav4, 4, true);
        runAnim(nav5, 5, true);
    } else {
        // animate out
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        runAnim(nav1, 1, false);
        runAnim(nav2, 2, false);
        runAnim(nav3, 3, false);
        runAnim(nav4, 4, false);
        runAnim(nav5, 5, false);
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
})