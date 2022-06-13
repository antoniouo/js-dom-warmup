let firstBtn = document.querySelector('#jsstyle');
console.log(firstBtn);

firstBtn.addEventListener('click', () => {
  console.log('clicked Style button');
  let secondBtn = document.createElement('button');
  document.body.appendChild(secondBtn);
  secondBtn.setAttribute('id', 'jsstyled');
  secondBtn.innerText = 'Styled';
  secondBtn.style.cssText = "background-color: green; color: white; font-size: 20px;";
  firstBtn.style.cssText = "background-color: white; color: black; font-size: 14px;";  
});




/* По клику на кнопку Style, добавьте новую кнопку с id="jsstyled" и с текстом Styled со стилями:
background-color: green;
color: white;
font-size: 20px;

Поменяйте стили кнопки Style по клику на кнопку Styled на:
размер шрифта кнопки на 14px
цвет фона на белый
цвет текста на черный */

/* Кнопку получить можно через let btn = document.querySelector('#jsstyle')

Для клика можно испоьзовать btn.addEventListener('click', () => {}).

Добавить новую кнопку в body можно через document.body.appendChild(elem);

Поменять стили можно через объект style. Н-р: elem.style.color = "black" (если в перем-ой -> elem.style[input1] = input2)

Кнопка Styled должна добавляться ТОЛЬКО после клика на кнопку Style */