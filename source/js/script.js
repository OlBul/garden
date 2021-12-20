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

const swiperTop = new Swiper('.swiper1', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    pagination: '.swiper-pagination1',
    paginationClickable: true,
   
    // Navigation arrows
    navigation: {
      nextEl: '._icon-next',
      prevEl: '._icon-preview',
    },

    autoHeigth: true,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 45,
    slidesPerGroup: 1,

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

   // preloadImages: false,

    /*lazy: {
        loadONTransitionStart: false,
        loadPrevNext: false,
    },*/

    //watchSlidesProgress: true,
   // watchSlidesVisibility: true,
  
    
  });

  const swiperBottom = new Swiper('.swiper2', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    pagination: '.swiper-pagination2',
    paginationClickable: true,
   
    // Navigation arrows
    navigation: {
      nextEl: '._icon-next',
      prevEl: '._icon-preview',
    },

    autoHeigth: true,
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 45,
    slidesPerGroup: 1,

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

   // preloadImages: false,

    /*lazy: {
        loadONTransitionStart: false,
        loadPrevNext: false,
    },*/

    //watchSlidesProgress: true,
   // watchSlidesVisibility: true,
  
    
  });