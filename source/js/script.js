let burgerMenu = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');
let listHeaderLinks = document.querySelectorAll('.list-header__link');

// =========== Burger menu ==========================================================================================

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});

listHeaderLinks.forEach ((listHeaderLink) => {
    listHeaderLink.addEventListener('click', () => {
        headerNav.classList.remove('active');
        body.classList.remove('lock');
        burgerMenu.classList.toggle('active');
    })
});

// ==== Swiper Slider ===============================================================================================
const swiperTop = new Swiper('.slider-top__container', {
       
    // Navigation arrows
    navigation: {
      nextEl: '.slider-top-button__next',
      prevEl: '.slider-top-button__prev',
    },
    autoHeigth: true,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 45,    
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
    // Navigation arrows
    navigation: {
      nextEl: '.slider-bottom-button__next',
      prevEl: '.slider-bottom-button__prev',
    },

    autoHeigth: true,
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 45,
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
  
// ========= arrow up =============================================================================================
  
  const arrowUp = document.querySelector('.arrow__up');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        arrowUp.classList.remove('arrow__up_hiden');
      } else if (window.scrollY < 700) {
        arrowUp.classList.add('arrow__up_hiden');
      }
  });

  arrowUp.addEventListener('click', () => {
      window.scrollTo(0,0);
  });

