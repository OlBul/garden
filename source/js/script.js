let burgerMenu = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('.body');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
})

// Slick Slider =====================================================
$(document).ready(function () {
    $('.slider__columns').slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        touchThreshold: 12,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
});