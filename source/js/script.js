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

const swiperTop = new Swiper('.slider-top__container', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,    
   
    // Navigation arrows
    navigation: {
      nextEl: '.slider-top-button__next',
      prevEl: '.slider-top-button__prev',
    },

    autoHeigth: true,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 45,
    //slidesPerGroup: 1,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    }     
    
  });  

  const swiperBottom = new Swiper('.slider-bottom__container', {
    // Optional parameters    
   
    // Navigation arrows
    navigation: {
      nextEl: '.slider-bottom-button__next',
      prevEl: '.slider-bottom-button__prev',
    },

    autoHeigth: true,
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 45 ,
   // slidesPerGroup: 1,

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    }  
    
  });
 // swiperBottom.slidesPerView = '4';
 // swiper2.slidesPerView.unit(4)
  //swiper2.unit(el);

  