window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-link'),
    cart = document.querySelector('.cart'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
        cart.classList.toggle('cart-menu-hover');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
            cart.classList.toggle('cart-menu-hover');
        })
    })
})