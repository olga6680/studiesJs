'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

/* const width = box.clientWidth; //ширина без скрола
const height = box.clientHeight; */

/* const width = box.offsetWidth; //ширина со скролом и маржинами. Только видимая часть
const height = box.offsetHeight; */

const width = box.scrollWidth; //Вся ширина, в т.ч. и не видимая, но без полосы прокрутки
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px'; //при клике раскрывается высота всего элемента
    console.log(box.scrollTop); //Показывает сколько отлистано. Можно изменять, в отличие от других метрик
});

//console.log(box.getBoundingClientRect()); //RIGHT считается слева, а не как в цсс, bottom - сверху
console.log(box.getBoundingClientRect().top);

//Получение стилей, которые уже были применены в цсс.
//Изменять их не получится, только смотреть
//Также можно получить стили псевдоэлементов getComputedStyle(box, ...)

const style = window.getComputedStyle(box);

//console.log(style);
console.log(style.display);

//Получение стилей для document и window

console.log(document.documentElement.scrollTop);

console.log(window.scrollBy(0, 200));