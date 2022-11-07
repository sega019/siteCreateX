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
   document.querySelector('.modal__close').addEventListener('click', modalHide)
}

const createModal = document
   .querySelectorAll('.positions-item__btn')
   .forEach((btn) => {
      btn.addEventListener('click', () => {
         const modal = document.querySelector('[data-modal="vacancy"]')
         const title = btn
            .closest('li')
            .querySelector('.positions-item__title').innerHTML
         modal.querySelector('.positions-modal__title').innerHTML = title
      })
   })

const inputFileChange = document
   .querySelectorAll('.attach input')
   .forEach((input) => {
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

if (document.querySelectorAll('.field, .checkbox, .radio, .select, .attach')) {
   document.querySelectorAll('.field input').forEach((input) => {
      if (input.hasAttribute('disabled')) {
         input.parentElement.classList.add('disabled')
      }
   })
}

const vacancyBtns = document.querySelectorAll('.positions-item__btn')
if (vacancyBtns) {
   vacancyBtns.forEach((vacancyBtn) => {
      vacancyBtn.addEventListener('mouseover', shadow)
      vacancyBtn.addEventListener('focus', shadow)
      vacancyBtn.addEventListener('mouseout', shadowDel)
      vacancyBtn.addEventListener('blur', shadowDel)

      function shadow() {
         const vacancyItem = vacancyBtn.closest('.positions-item')
         vacancyItem.style.boxShadow =
            '0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03)'
      }

      function shadowDel() {
         const vacancyItem = vacancyBtn.closest('.positions-item')
         vacancyItem.style.boxShadow = 'none'
      }
   })
}
