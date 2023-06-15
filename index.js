const swiper = new Swiper('.quality__swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


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
