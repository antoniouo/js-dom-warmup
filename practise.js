
let ul = document.querySelector('ul');
let one = ul.querySelector('.first');
one.innerText = "1";

let two = ul.querySelector('.second');
two.innerText = "2";

let three = ul.querySelector('.third');
three.innerText = "3";

let newUl_Li = document.createElement('li');
newUl_Li.className = 'fourth';
newUl_Li.innerText = 'Четвертый';
ul.appendChild(newUl_Li);


let ol = document.querySelector('ol');
let oldLi = ol.querySelector('.third');
ol.removeChild(oldLi);


let newOl_Li = document.createElement('li');
newOl_Li.className = 'new';
newOl_Li.innerText = 'Новый';
ol.appendChild(newOl_Li);


/* Замените в ul > li все строчки на числа. Например: <li class="first">one</li> на <li class="first">1</li>.

Например:
let ul = document.querySelector('ul');
let one = ul.querySelector('.first');
one.innerText = "1"

Добавьте в ul новый li c классом fourth, с текстом "Четвёртый"

Удалите в ol последний li.

Добавьте в ol новый li с классом new, с текстом "Новый" */