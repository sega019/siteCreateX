export function Scroll() {
   const goTop = document.querySelector('.to-top')
   window.addEventListener('scroll', () => {
      if (window.scrollY > 1100) {
         goTop.classList.remove('hidden')
      } else {
         goTop.classList.add('hidden')
      }
   })
}
