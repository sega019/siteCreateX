import Choices from 'choices.js'
document.querySelectorAll('.choice').forEach((el) => {
   let choices = new Choices(el, {
      searchEnabled: false,
      position: 'auto',
      itemSelectText: '',
      shouldSort: false,
      placeholder: true,
   })
})
