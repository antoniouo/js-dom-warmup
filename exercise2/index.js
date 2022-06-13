let elems = document.querySelectorAll('.outer');

/* Возвращает статический NodeList (коллекцию) со всеми найденными элементами класса outer в документе */

let btn = document.querySelector('.btn'); // получили ссылку на кнопку с классом btn
btn.addEventListener('click', () => {
  for (let i = 1; i < elems.length; i++) {
    console.log(elems[i]);
    let grut = document.createElement('p');
    if (i !== elems.length - 1) {
    grut.innerText = 'Я есть Грут';
    elems[i].appendChild(grut);
  } else {
    grut.innerText = 'Конец';
    elems[i].appendChild(grut);
  }
}
})


/* Добавьте в каждый div c классом outer новый параграф p с текстом "Я есть Грут".

Обратите внимание, что в первом диве уже есть параграф с текстом "Я есть Грут", поэтому туда добавлять ничего не нужно. В последнем (в 5 блоке) диве вместо "Я есть Грут" напишите "Конец".

Текст "Я есть Грут" должен добавляться ТОЛЬКО после клика на кнопку КЛИК-КЛИК 

Напиши комментарий, что возвращает querySelectorAll.

Используйте цикл, чтобы добавить к каждому div новый параграф.

Добавить можно с помощью div.appendChild(elem). */