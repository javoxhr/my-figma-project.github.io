const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.menu-open')
const closeMenu = document.querySelector('.menu-close')

menu.addEventListener('click', ()=> {
    openMenu.classList.add('open')
})

closeMenu.addEventListener('click', ()=> {
    openMenu.classList.remove('open')
})