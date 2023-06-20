AOS.init();
let mobile = document.querySelector('.header__mobile')
let headerHeight = document.querySelector('.header').scrollHeight

document
  .querySelector('.header__burger-menu')
  .addEventListener('click', function () {
    mobile.classList.add('active')
  })
document
  .querySelector('.header__mobile-burger')
  .addEventListener('click', function () {
    mobile.classList.remove('active')
  })

window.addEventListener('scroll', () => {
  let scrollPos = window.pageYOffset
  let pos = document.getElementById('intro').scrollHeight
  if (scrollPos > pos - headerHeight)
    document.querySelector('.header').classList.add('active')
  else document.querySelector('.header').classList.remove('active')
})


var slider = new Swiper('.swiper-container', {
  speed: 500,
  effect: 'fade',
   
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    },
});

const swiper = new Swiper('.quality__slider', {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
    }
  }
});