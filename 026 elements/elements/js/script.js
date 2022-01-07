'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = 'background-color: blue; width: 500px'; //то же самое одной строкой
//box.style.cssText = `background-color: blue; width: ${num}`; //Динамические стили. Например ширина модального окна в зависимости от ширины экрана

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

//для нескольких элементов поменять несколько стилей:

//1

/* for (let i = 0; i < hearts.length; i++) { //i < hearts.length цикл будет работать пока есть элементы, тюе все элементы из массива переберет
    hearts[i].style.backgroundColor = 'blue'; //почти не используется
} */

//2
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//Методы JS cоздания элементов (нодов)

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');  Используется очень редко

//добавление классов. className очень устаревшее. Его не используйте. Вместо него:

div.classList.add('black');
//новые методы вывода созданных элементов, которые еще не поддерживаются старыми браузерами:

document.body.append(div); // добавит элемент в конец body

//document.querySelector('.wrapper').append(div);  если не задана const можно прямо так обратиться к элементу. Например, если к нему обращаемся один раз

//wrapper.append(div);

//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);

//Удаление элементов со страницы:
//circles[0].remove();

//Замена одного элемента другим
//hearts[0].replaceWith(circles[0]);

//Устaревшие конструкции:
//wrapper.appendChild(div);

//wrapper.insertBefore(div, hearts[1]);

//wrapper.removeChild(hearts[1]);

//wrapper.replaceChild(circles[0], hearts[0]);

//Редактирование вставленных элементов

//1
//div.innerHTML = "<h1>Hello world!</h1>";

//2
//div.textContent = "Hello"; //Только для текста. Используется, чтобы пользователь, вводя информацию не поломал нам верстку

//Комбинация методов

div.innerHTML = "<h1>Hello world!</h1>";

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
