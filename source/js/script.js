let burgerMenu = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');
let listHeaderLinks = document.querySelectorAll('.list-header__link');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});



console.log(listHeaderLinks);

listHeaderLinks.forEach ((listHeaderLink) => {
    listHeaderLink.addEventListener('click', () => {
        headerNav.classList.remove('active');
        body.classList.remove('lock');
        burgerMenu.classList.toggle('active');
    })
})
    

// Swiper Slider =====================================================
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

  


  const arrowLink = document.querySelectorAll('.arrow__link[data-goto]');

if ( arrowLink.length > 0) {
    arrowLink.forEach (arrow => {
        arrow.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const arrow = e.target;

        if (arrow.dataset.goto && document.querySelector(arrow.dataset.goto)) {
            const gotoBlock = document.querySelector(arrow.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}