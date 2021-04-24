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

new Swiper('.bike-slider',{
    
    // Кнопки для навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Количество отображаемых слайдов
    slidesPerView: 1.85,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    /* spaceBetween: -300, */

    //Активный слайд по центру
    centeredSlides: true,

    // Бесконечный слайдер
    loop: true,
});