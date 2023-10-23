<<<<<<< HEAD

const doms = {
    menu: document.querySelector('.hamburger-menu-links'),
    icon: document.querySelector('.hamburger-icon')
}

function toggleMenu(){
    doms.menu.classList.toggle('open')
    doms.icon.classList.toggle('open')
}
=======
const doms = {
    icon: document.querySelector('.js--icon-hamburger'),
    nav: document.querySelector('.js--main-nav')
}


doms.icon.addEventListener('click', () => {
    doms.nav.slideToggle();
    if (doms.nav.style.display === 'none' || doms.nav.style.display === '') {
        doms.nav.style.display = 'block';
    } else {
        doms.nav.style.display = 'none';
    }
})
>>>>>>> fcb65c79020c9b1e04476809712f6f3a67fc6d93
