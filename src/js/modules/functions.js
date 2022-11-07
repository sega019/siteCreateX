export function isTab() {
   const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav')
   const portfolioTabsBtns = document.querySelectorAll(
      '.portfolio-tabs-nav__btn'
   )
   const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item')
   const portfolioTabsItemsVisible = document.querySelectorAll(
      '.portfolio-tabs__item--visible'
   )
   const loadMore = document.querySelector('.portfolio-more')
   const maxItems = 9

   if (portfolioTabsNav) {
      const isLoadMoreNeeded = (selector) => {
         if (selector.length <= maxItems) {
            loadMore.style.display = 'none'
         } else {
            loadMore.style.display = 'inline-flex'
         }
      }

      const hideMoreItems = (selector) => {
         if (selector.length > maxItems) {
            const arr = Array.from(selector)
            const hiddenItems = arr.slice(maxItems, selector.length)

            hiddenItems.forEach((el) => {
               el.classList.remove('portfolio-tabs__item--visible')
               el.classList.remove('portfolio-tabs__item--visible-more')
            })
         }
      }

      portfolioTabsNav.addEventListener('click', (e) => {
         const target = e.target
         if (target.classList.contains('portfolio-tabs-nav__btn')) {
            const path = target.dataset.path

            portfolioTabsBtns.forEach((el) => {
               el.classList.remove('portfolio-tabs-nav__btn--active')
            })
            target.classList.add('portfolio-tabs-nav__btn--active')

            portfolioTabsItems.forEach((el) => {
               el.classList.remove('portfolio-tabs__item--visible')
               el.classList.remove('portfolio-tabs__item--visible-more')
            })

            document
               .querySelectorAll(`[data-target="${path}"]`)
               .forEach((el) => {
                  el.closest('.portfolio-tabs__item').classList.add(
                     'portfolio-tabs__item--visible'
                  )
               })

            isLoadMoreNeeded(
               document.querySelectorAll(`[data-target="${path}"]`)
            )
            hideMoreItems(
               document.querySelectorAll('.portfolio-tabs__item--visible')
            )

            if (path == 'all') {
               portfolioTabsItems.forEach((el) => {
                  el.classList.add('portfolio-tabs__item--visible')
               })

               isLoadMoreNeeded(
                  document.querySelectorAll('.portfolio-tabs__item--visible')
               )
               hideMoreItems(
                  document.querySelectorAll('.portfolio-tabs__item--visible')
               )
            }
         }
      })

      hideMoreItems(portfolioTabsItems)
      isLoadMoreNeeded(portfolioTabsItemsVisible)

      loadMore.addEventListener('click', (e) => {
         const visibleItems = document.querySelectorAll(
            '.portfolio-tabs__item--visible'
         )

         const path = document.querySelector('.portfolio-tabs-nav__btn--active')
            .dataset.path
         console.log(path)

         if (path == 'all') {
            portfolioTabsItems.forEach((el) => {
               el.classList.add('portfolio-tabs__item--visible-more')
               loadMore.style.display = 'none'
            })
         } else {
            document
               .querySelectorAll(`[data-target="${path}"]`)
               .forEach((el) => {
                  el.closest('.portfolio-tabs__item').classList.add(
                     'portfolio-tabs__item--visible-more'
                  )
               })
            loadMore.style.display = 'none'
         }
      })
   }
}

export function isScroll() {
   const goTop = document.querySelector('.to-top')
   window.addEventListener('scroll', () => {
      if (window.scrollY > 1100) {
         goTop.classList.remove('hidden')
      } else {
         goTop.classList.add('hidden')
      }
   })
}

export function isVideo() {
   const videoBlock = document.querySelector('.video-block')

   if (videoBlock) {
      const video = videoBlock.querySelector('video')
      const playBtn = videoBlock.querySelector('.video-block__play')

      playBtn.addEventListener('click', () => {
         videoBlock.classList.add('video-block--played')
         video.play()
         video.controls = true
         playBtn.classList.add('video-block__play--played')
      })

      video.onpause = function () {
         videoBlock.classList.remove('video-block--played')
         video.controls = false
         playBtn.classList.remove('video-block__play--played')
      }
   }
}

export function isModal() {
   const modal = document.querySelector('.modal')
   if (modal) {
      const modalHide = (e) => {
         if (
            !e.target.closest('.modal__content') ||
            e.target.closest('.modal__close')
         ) {
            document.querySelectorAll('[data-modal]').forEach((modal) => {
               modal.classList.remove('modal__content--active')
            })
            modal.classList.remove('modal--active')
         }
      }
      document.querySelectorAll('[data-modal-btn]').forEach((btn) => {
         btn.addEventListener('click', () => {
            const thisModal = document.querySelector(
               `[data-modal="${btn.dataset.modalBtn}"]`
            )
            thisModal.classList.add('modal__content--active')
            modal.classList.add('modal--active')
         })
      })
      document.querySelector('.modal').addEventListener('click', modalHide)
      document
         .querySelector('.modal__close')
         .addEventListener('click', modalHide)
   }
}

export function customModal() {
   document.querySelectorAll('.positions-item__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
         const modal = document.querySelector('[data-modal="vacancy"]')
         const title = btn
            .closest('li')
            .querySelector('.positions-item__title').innerHTML
         modal.querySelector('.positions-modal__title').innerHTML = title
      })
   })
}

export function isAccordion() {
   document.querySelectorAll('.accordion__btn').forEach((accordionBtn) => {
      const accordionItem = accordionBtn.parentElement
      const accordionPanel = accordionBtn.nextElementSibling
      if (accordionItem.classList.contains('accordion__item--active')) {
         accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px'
      } else {
         accordionPanel.style.maxHeight = 0
      }
      accordionBtn.addEventListener('click', () => {
         if (accordionItem.classList.contains('accordion__item--active')) {
            accordionItem.classList.remove('accordion__item--active')
            accordionPanel.style.maxHeight = 0
         } else {
            accordionItem.classList.add('accordion__item--active')
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px'
         }
      })
   })
}

export function FileChange() {
   document.querySelectorAll('.attach input').forEach((input) => {
      if (input) {
         input.addEventListener('change', () => {
            const attach = input.closest('.attach')
            attach.classList.add('attach--active')
            input.files[0]
               ? (attach.querySelector('span').innerHTML = input.files[0].name)
               : null
         })
      }
   })
}

export function DisableField() {
   if (
      document.querySelectorAll('.field, .checkbox, .radio, .select, .attach')
   ) {
      document.querySelectorAll('.field input').forEach((input) => {
         if (input.hasAttribute('disabled')) {
            input.parentElement.classList.add('disabled')
         }
      })
   }
}

export function isShadow() {
   const positionsBtns = document.querySelectorAll('.positions-item__btn')
   if (positionsBtns) {
      positionsBtns.forEach((positionsBtn) => {
         positionsBtn.addEventListener('mouseover', shadow)
         positionsBtn.addEventListener('focus', shadow)
         positionsBtn.addEventListener('mouseout', shadowDel)
         positionsBtn.addEventListener('blur', shadowDel)

         function shadow() {
            const positionsItem = positionsBtn.closest('.positions-item')
            positionsItem.style.boxShadow = 'var(--small-shadow)'
         }

         function shadowDel() {
            const positionsItem = positionsBtn.closest('.positions-item')
            positionsItem.style.boxShadow = 'none'
         }
      })
   }
}

export function progress() {
   const circles = document.querySelectorAll('.facts-element__circle')
   circles.forEach((el) => {
      if (el.dataset.percentage == 'true') {
         let progress = el.querySelector('.progress')
         let valueBlock = el.querySelector('.facts-element__value')
         let radius = progress.getAttribute('r')
         let circleLength = 2 * Math.PI * radius
         let full = el.dataset.full
         let value = el.dataset.value
         let percentageProgress = Math.floor((value / full) * 100)
         valueBlock.textContent = value
         progress.setAttribute('stroke-dasharray', circleLength)
         progress.setAttribute(
            'stroke-dashoffset',
            circleLength - (circleLength * percentageProgress) / 100
         )
      } else {
         let progress = el.querySelector('.progress')
         let valueBlock = el.querySelector('.facts-element__value')
         let radius = progress.getAttribute('r')
         let circleLength = 2 * Math.PI * radius
         let percent = el.dataset.percent
         let percentageProgress = Math.floor(percent)
         valueBlock.textContent = percent + '%'
         progress.setAttribute('stroke-dasharray', circleLength)
         progress.setAttribute(
            'stroke-dashoffset',
            circleLength - (circleLength * percentageProgress) / 100
         )
      }
   })
}
