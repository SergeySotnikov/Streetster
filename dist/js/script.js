window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.nav-link , .social-link , .lang-list-item'),
    cart = document.querySelector('.cart'),
    hamburger = document.querySelector('.mobile-menu-btn'),
    lang = document.querySelector('.lang');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('mobile-menu-btn-active');
        menu.classList.toggle('menu-active');
        cart.classList.toggle('cart-menu-hover');
        lang.classList.toggle('lang-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('mobile-menu-btn-active');
            menu.classList.toggle('menu-active');
            cart.classList.toggle('cart-menu-hover');
            lang.classList.toggle('lang-active');
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
    slidesPerView: 2,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: -90,

    //Активный слайд по центру
    centeredSlides: true,

    // Бесконечный слайдер
    loop: true,

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -90,
        },
        1024: {
          slidesPerView: 1.8,
          spaceBetween: -90,
        },
        425: {
          slidesPerView: 1.5,
          spaceBetween: -40,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: -20,
          },
       
      }
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
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 42,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0,
          centeredSlides: false,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
       
      }
    
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