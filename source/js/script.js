let burgerMenu = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
})

// Swiper Slider =====================================================

/*const sliderTop = new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoHeigth: true,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    //centeredSlides: true,

});*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
  
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoHeigth: true,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 45,
    slidesPerGroup: 1,
  
    
  });