const bodyStyles = window.getComputedStyle(document.body)
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'))

// Слайдер

import Swiper, {
   Navigation,
   Pagination,
   Autoplay,
   Thumbs,
   Keyboard,
} from 'swiper'

const heroSlider = document.querySelector('.hero__slider')
if (heroSlider) {
   const SwiperHeroSlider = new Swiper(heroSlider, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      speed: 1500,
      simulateTouch: false,
      watchSlidesProgress: true,
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function (index, className) {
            return (
               '<button class="' +
               className +
               '" type="button">' +
               (index + 1 < 10 ? '0' : '') +
               (index + 1) +
               '<span class="swiper-pagination-bullet-bar"></span>' +
               '</button>'
            )
         },
      },
      navigation: {
         nextEl: '.hero__next',
         prevEl: '.hero__prev',
      },
   })
}

const portSlider = document.querySelector('.portfolio-section__items')
if (portSlider) {
   const portfolioSlider = new Swiper(portSlider, {
      modules: [Navigation, Keyboard],
      loop: true,
      speed: 1000,
      simulateTouch: false,
      slidesPerView: 3,
      watchSlidesProgress: true,
      spaceBetween: gap,
      keyboard: {
         enabled: true,
         pageUpDow: false,
      },

      navigation: {
         nextEl: '.portfolio-section__next',
         prevEl: '.portfolio-section__prev',
      },
   })
}

const testiSlider = document.querySelector('.testimonials__items')
if (testiSlider) {
   const testimonialsSlider = new Swiper(testiSlider, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: gap,

      speed: 1000,
      simulateTouch: false,
      watchSlidesProgress: true,

      navigation: {
         nextEl: '.testimonials__next',
         prevEl: '.testimonials__prev',
      },
   })
}

const proSlider = document.querySelector('.projects__items')
if (proSlider) {
   const projectsSlider = new Swiper(proSlider, {
      modules: [Navigation, Keyboard],
      slidesPerView: 3,
      spaceBetween: gap,
      loop: true,

      navigation: {
         nextEl: '.projects__next',
         prevEl: '.projects__prev',
      },
   })
}

const workSlider = document.querySelector('.work-slider-images')
if (workSlider) {
   const SwiperWorkThumbs = new Swiper('.work-slider-nav', {
      modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         576: {
            slidesPerView: 6,
         },
         768: {
            slidesPerView: 10,
         },
      },
   })
   const SwiperWork = new Swiper(workSlider, {
      modules: [Navigation, Thumbs],
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      simulateTouch: false,
      watchSlidesProgress: true,

      navigation: {
         nextEl: '.work-slider__next',
         prevEl: '.work-slider__prev',
      },

      thumbs: {
         swiper: SwiperWorkThumbs,
      },
   })
}

const historySlider = document.querySelector('.history-slider')

if (historySlider) {
   const swiperHistory = new Swiper(historySlider, {
      modules: [Navigation, Keyboard],
      simulateTouch: false,
      speed: 1000,
      slidesPerView: 1,
      watchSlidesProgress: true,
      keyboard: {
         enabled: true,
         pageUpDow: false,
      },

      navigation: {
         nextEl: '.history__next',
         prevEl: '.history__prev',
      },
   })

   swiperHistory.on('slideChange', function () {
      console.log(swiperHistory.realIndex)

      historyBtns.forEach((el) => {
         el.classList.remove('history-nav__btn--active')
      })

      document
         .querySelector(
            `.history-nav__btn[data-index="${swiperHistory.realIndex}"]`
         )
         .classList.add('history-nav__btn--active')
   })

   const historyBtns = document.querySelectorAll('.history-nav__btn')

   historyBtns.forEach((el, idx) => {
      el.setAttribute('data-index', idx)

      el.addEventListener('click', (e) => {
         const index = e.currentTarget.dataset.index

         historyBtns.forEach((el) => {
            el.classList.remove('history-nav__btn--active')
         })

         e.currentTarget.classList.add('history-nav__btn--active')

         swiperHistory.slideTo(index)
      })
   })
}

// const heroSliderSpeed = 1000
// const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed') //get
// document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms') //set
// const heroSlider = document.querySelector('.hero-slider')
// if (heroSlider) {
//   const SwiperHeroSlider = new Swiper(heroSlider, {
//     loop: true,
//     slidesPerView: 1,
//     speed: heroSliderSpeed,
//     simulateTouch: false,
//     watchSlidesProgress: true,

//     navigation: {
//       nextEl: '.hero__next',
//       prevEl: '.hero__prev',
//     },

//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },

//     pagination: {
//       el: '.hero__pag',
//       type: 'bullets',
//       clickable: true,
//     },
//     on: {
//       init: function () {
//         const paginationBullets = document.querySelectorAll(
//           '.hero__pag .swiper-pagination-bullet'
//         )

//         paginationBullets.forEach((el) => {
//           el.innerHTML = `<span class="hero__bar"></span>`
//         })
//       },
//     },
//   })
// }
