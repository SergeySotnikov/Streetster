window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-link , .social-link'),
    cart = document.querySelector('.cart'),
    hamburger = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('mobile-menu-active');
        menu.classList.toggle('menu-active');
        cart.classList.toggle('cart-menu-hover');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('mobile-menu-active');
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
    slidesPerView: 1.9,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    /* spaceBetween: -300, */

    //Активный слайд по центру
    centeredSlides: true,

    // Бесконечный слайдер
    loop: true,
});

new Swiper('.news-slider',{
    
    // Кнопки для навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Количество отображаемых слайдов
    slidesPerView: 3,

    //Активный слайд по центру
    centeredSlides: true,

      // Отступ между слайдами
    spaceBetween: 42,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Бесконечный слайдер
    loop: true,
});


new Swiper('.product-slider',{
    
    // Кнопки для навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    //Пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Количество отображаемых слайдов
    slidesPerView: 1,

    //Активный слайд по центру
    centeredSlides: true,

      // Отступ между слайдами
    spaceBetween: 0,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Бесконечный слайдер
    loop: true,
});