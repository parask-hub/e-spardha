function classToggle() {
    const navs = document.querySelectorAll('.Navbar_items')
    navs.forEach(nav => nav.classList.toggle('.Navbar_ToggleShow'));


}

document.querySelector('.Navbar_Link-Toggle')
    .addEventListener('click', classToggle);