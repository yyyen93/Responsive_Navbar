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