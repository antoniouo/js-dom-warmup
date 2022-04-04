let elems = document.querySelectorAll('.outer')


let btn = document.querySelector('.btn') // получили ссылку на кнопку с классом btn
btn.addEventListener('click', () => {
  for (let i = 0; i < elems.length; i++) {
    console.log(elems[i])
  }
})
