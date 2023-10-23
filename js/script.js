
const doms = {
    menu: document.querySelector('.hamburger-menu-links'),
    icon: document.querySelector('.hamburger-icon')
}

function toggleMenu(){
    doms.menu.classList.toggle('open')
    doms.icon.classList.toggle('open')
}
