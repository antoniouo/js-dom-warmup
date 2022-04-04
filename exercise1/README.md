**Нельзя менять index.html и index.css файлы**

Напишите функцию **jsStyle** в файле **index.js**, которая по клику на кнопку Style поменяет:
- размер шрифта кнопки на 14px
- background color на белый
- цвет текста на черный

1) Кнопку получить можно через ```querySelector('#id')```
2) Поменять стили можно через объект style. Н-р: ```elem.style.color = "black"```
3) Для клика можно испоьзовать ```addEventListener('click', () => {})```. Вместо callback функции можно передать функцию jsStyle
